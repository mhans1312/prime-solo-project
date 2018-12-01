const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    const sqlText = 'SELECT * FROM person ORDER BY id ASC';
    pool.query(sqlText)
    .then((result) => {
      console.log('result from person GET router request: ', result);
      res.send(result.rows)
    })
    .catch((error) => {
      res.sendStatus(500);
      console.log(`GET error ${sqlText}`, error);
    })
  });

router.delete('/', rejectUnauthenticated, (req, res) => {
    const queryText = 'DELETE FROM person WHERE id=$1';
    pool.query(queryText, [req.query.id])
    .then(() => {res.sendStatus(200);})
    .catch((error) => {
      console.log('error on router delete', error);
      res.sendStatus(500);
    })
  })

  module.exports = router;