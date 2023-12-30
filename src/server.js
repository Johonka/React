// server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

// Skapa en SQLite-databasanslutning
const db = new sqlite3.Database('Testshop.db', sqlite3.OPEN_READWRITE, (err) => {
  if(err) return console.error(err.message)
});

console.log('Välkommen till jerras api-endpoint', db)
// Skapa en tabell om den inte redan finns
db.run('CREATE TABLE IF NOT EXISTS SHOP_PRODUCTS (id INTEGER PRIMARY KEY, name TEXT, price INTEGER, text TEXT, pict_name TEXT)');

// Middleware för att hantera JSON-data
app.use(express.json());

// API-endpoint för att hämta alla objekt från databasen
app.get('/products', (req, res) => {
  console.log('GET anrop mottaget: /products');
  console.log(db);
  db.all('SELECT * FROM SHOP_PRODUCTS', (err, rows) => {
    if (err) return console.error(err.message);
    rows.forEach((row) => {
      console.log(row);
    })
    res.json(rows);
  });
});

// API-endpoint för att lägga till ett objekt i databasen
app.post('/addProduct', (req, res) => {
  console.log('POST anrop mottaget: /addProduct');
  const { name, price, text, pict_name } = req.body;
  SQL = 'INSERT INTO SHOP_PRODUCTS (name, price, text, pict_name) VALUES (?,?,?,?)'
  db.run(SQL, 
    [name, price, text, pict_name], 
    (err) => {
    if (err) return console.error(err.message);
    });
});

// Starta servern
app.listen(port, () => {
  console.log(`Server lyssnar på http://localhost:${port}`);
});
