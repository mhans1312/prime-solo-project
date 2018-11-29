const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    const sqlText = 'SELECT * FROM role ORDER BY id ASC';
    pool.query(sqlText)
    .then((result) => {
      console.log('result from GET router request: ', result.rows);
      res.send(result.rows)
    })
    .catch((error) => {
      console.log(`GET error ${sqlText}`, error);
    })
  });

module.exports = router;