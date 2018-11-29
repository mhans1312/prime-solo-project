const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.post('/', rejectUnauthenticated, async (req, res) => {
    console.log('in req.body', req.body)
    const client = await pool.connect();

    try {
        const {
            date,
            store,
            products
        } = req.body;
        await client.query('BEGIN')
        const ordersResults = await client.query(`INSERT INTO "orders" ("order_date", "store_id")
        VALUES ($1, $2)
        RETURNING id;`, [date, store]);
        const orderId = ordersResults.rows[0].id;
        console.log('orderID is', orderId);

        await Promise.all(products.map(product => {
            const insertLineItemText = `INSERT INTO "line_item" ("order_id", "product_id", "quantity") VALUES ($1, $2, $3)`;
            const insertLineItemValues = [orderId, product.id, product.count];
            return client.query(insertLineItemText, insertLineItemValues);
        }));

        await client.query('COMMIT')
        res.sendStatus(201);
    } catch (error) {
        await client.query('ROLLBACK')
        console.log('Error POST', error);
        res.sendStatus(500);
    } finally {
        client.release()
    }
});

module.exports = router;