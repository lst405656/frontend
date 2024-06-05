const express = require("express");
const router = express.Router();

router.get("/data", (req, res) => {
    res.json({
        message: "hello from th API"
    });
});

module.exports = router