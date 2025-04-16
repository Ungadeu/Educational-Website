const express = require('express');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const router = express.Router();

router.get('/', (req, res) => {
  const results = [];
  const filePath = path.join(__dirname, '../data/careers.csv');

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      res.json(results);
    })
    .on('error', (err) => {
      console.error('Error reading CSV:', err);
      res.status(500).send('Failed to load data');
    });
});

module.exports = router;
