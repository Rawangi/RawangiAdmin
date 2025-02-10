const express = require("express");
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(cors());

const MAPBOX_DATASET_URL = process.env.MAPBOX_URL;

app.get("/dataset", async (req, res) => {
    try {
        const response = await fetch(MAPBOX_DATASET_URL);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

app.listen(3000, () => console.log("Proxy server running on port 3000"));
