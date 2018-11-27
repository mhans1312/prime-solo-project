const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
    console.log('PARS router')
    const sqlText = 'SELECT * FROM pars JOIN products on products.id = product_id WHERE store_id = $1 ORDER BY product_id ASC;'
    pool.query(sqlText, [req.params.id])
    .then((result) => {
      console.log('result from pars GET router: ', result.rows);
      res.send(result.rows)
    })
    .catch((error) => {
      console.log(`GET error ${sqlText}`, error);
    })
  });

module.exports = router;