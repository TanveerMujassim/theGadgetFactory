const express = require('express');
//const { Pool } = require('pg');
const cors = require('cors');
const bodyParser=require('body-parser')
const app = express();
const port = 5000;
app.use(cors());
// PostgreSQL connection configuration
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'products',
//   password: 'TanuFati123',
//   port: 5432, // default PostgreSQL port
// });

// Define a route to retrieve data from the database
// app.get('/data', (req, res) => {
//     console.log("string")
//   pool.query('SELECT id, name, discreption, price, category, rating FROM public.products WHERE id'=+{req.id}, (err, result) => {
//     if (err) {
//       console.error('Error executing query', err);
//       res.sendStatus(500); 
//     } else {
//         console.log(result.rows)
//       res.json(result.rows);
//     }
//   });
// });

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});