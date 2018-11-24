const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    const newOrder = req.body;
    console.log('new order: ', newOrder)
    const sqlText = `INSERT INTO inventory ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
                      VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    pool.query(sqlText, [newProject.name, newProject.description, newProject.thumbnail, newProject.website, newProject.github, newProject.date_completed, newProject.tag_id])
    
    .then((result) => {
      res.sendStatus(200)
    })
    .catch((error) => {
      console.log(`error on POST ${sqlText}`, error);
    })
  });

module.exports = router;