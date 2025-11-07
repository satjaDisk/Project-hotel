import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { db } from "./db.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));


app.post("/api/book", (req, res) => {
  const { name, email, checkin, checkout, roomType } = req.body;
  const sql = "INSERT INTO bookings (name, email, checkin, checkout, roomType) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [name, email, checkin, checkout, roomType], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "จองห้องพักสำเร็จ!" });
  });
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
