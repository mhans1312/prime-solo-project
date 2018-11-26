const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// router.post('/', (req, res) => {
//   newOrder = req.body
//   const sqlText = `INSERT ALL INTO products VALUES(&product.id, &quantity)
//                     INTO orders(&order_date, &store.id)`;
//   pool.query(sqlText [newOrder.product_id, newOrder.quantity, newOrder.order_date, newOrder.store.id])
//   .then((result) => {
//     console.log('result from POST router request: ', result);
//     res.send(result.rows)
//   })
//   .catch((error) => {
//     console.log(`POST error ${sqlText}`, error);
//   })
// });

router.post('/', (req, res) => {
  console.log(req.body);
  const queryText1 = `INSERT INTO orders
                      JOIN store ON store.id = orders.store_id
                      ("order_id", "order_date", "store_id")
                     VALUES ($1, $2, $3) RETURNING id;`;

  const queryText2 = `INSERT INTO line_item
                     ("order_id", "product_id", "quantity")
                     VALUES ($1, $2, $3);`;
  pool.query(queryText1, [req.body.name, req.body.student_pic, req.body.note])
      .then((results) => {
          console.log('pool results', results.rows);

          pool.query(queryText2, [req.body.user_id, results.rows[0].id])
          .then((results) => {
              res.sendStatus(201);
          })
          .catch((error) => {
              console.log(error);
              res.sendStatus(500);
          })
      }).catch((error) => {
          console.log(error);
          res.sendStatus(500);
      });

});

module.exports = router;

