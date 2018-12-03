const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/:date', rejectUnauthenticated, (req, res) => {
    console.log('comm Date is ', req.params.date)
    const sqlText = `SELECT line_item.id, line_item.quantity, products.description FROM orders
                        JOIN store on store.id = orders.store_id 
                        JOIN line_item on line_item.order_id = orders.id 
                        JOIN products on products.id = line_item.product_id
                        ORDER BY line_item.id;`;
    pool.query(sqlText, [])
    .then((result) => {
      console.log('result from comm GET router request: ', result.rows);
      res.send(result.rows)
      res.sendStatus(200);
    })
    .catch((error) => {
      res.sendStatus(500);
      console.log(`GET error ${sqlText}`, error);
    })
  });

module.exports = router;