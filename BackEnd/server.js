const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword', // replace with your MySQL root password
  database: 'bannerDB'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('MySQL Connected...');
});

// API routes
app.get('/api/banner', (req, res) => {
  const sql = 'SELECT * FROM banner WHERE id = 1';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching banner:', err);
      res.status(500).send('Server error');
      return;
    }
    res.send(result[0]);
  });
});

app.post('/api/banner', (req, res) => {
  const { description, timer, link, isVisible } = req.body;
  const sql = 'UPDATE banner SET description = ?, timer = ?, link = ?, isVisible = ? WHERE id = 1';
  db.query(sql, [description, timer, link, isVisible], (err, result) => {
    if (err) {
      console.error('Error updating banner:', err);
      res.status(500).send('Server error');
      return;
    }
    res.send('Banner updated...');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
