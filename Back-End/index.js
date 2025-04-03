import express from "express";
import cors from "cors";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database!");
});

// API Route - Fetch categories from MySQL
app.get("/categories", (req, res) => {
  const sql = "SELECT * FROM categories";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database query failed" });
    }
    res.json(results);
  });
});

// API Route - Fetch bestseller from MySQL

app.get("/bestseller", (req, res) => {
  const sql = "SELECT * FROM bestseller";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database query failed" });
    }
    res.json(results);
  });
});

// API Route - Fetch Happy Clients from MySQL

app.get("/happyclient", (req, res) => {
  const sql = "SELECT * FROM happyclient";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database query failed" });
    }
    res.json(results);
  });
});

// API Route - Fetch Search Collection from MySQL

app.get("/collection", (req, res) => {
  const sql = "SELECT * FROM collection";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database query failed" });
    }
    res.json(results);
  });
});
// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:5000`);
});
