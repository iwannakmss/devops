const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT NOW()');
        res.json(result.rows);
    } catch (err) {
        res.json({ message: "DB not connected, but OK" });
    }
});

// 👉 ОЦЕ ВАЖЛИВО:
module.exports = router;