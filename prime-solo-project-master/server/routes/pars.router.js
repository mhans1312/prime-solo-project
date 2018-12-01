const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/:id', rejectUnauthenticated, (req, res) => {
    console.log('PARS router')
    const sqlText = 'SELECT * FROM pars JOIN products on products.id = product_id WHERE store_id = $1 ORDER BY product_id ASC;'
    pool.query(sqlText, [req.params.id])
    .then((result) => {
      res.send(result.rows)
    })
    .catch((error) => {
      console.log(`GET error ${sqlText}`, error);
    })
  });

  router.put('/', rejectUnauthenticated, (req, res) => {
      console.log('in PUT', req.body)
        const sqlText = `UPDATE pars SET ${req.body.parDay} = $3 WHERE store_id = $1 AND product_id = $2;`
        pool.query(sqlText, [req.body.store, req.body.product_id, req.body.parNum])
      .then((result) => {
          res.sendStatus(200);
      })
      .catch((error) => {
          res.sendStatus(500)
          console.log(`PUT error in ${sqlText}`, error)
      })
  })

module.exports = router;