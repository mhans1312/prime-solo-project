const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const sqlText = 'SELECT * FROM products ORDER BY id ASC';
    pool.query(sqlText)
    .then((result) => {
      console.log('result from GET router request: ', result);
      res.send(result.rows)
    })
    .catch((error) => {
      console.log(`GET error ${sqlText}`, error);
    })
  });

module.exports = router;