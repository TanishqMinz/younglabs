const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: "https://younglabs-frontend.vercel.app/",
    methods: ["GET", "POST"],
    credentials: true,
}));

app.get("/api/greet", (req, res) => {
    const name = req.query.name;
    if (!name) {
        return res.status(400).json({ error: "Name is required." });
    }
    res.json({ message: `Hello, ${name}! Welcome.` });
});

export default app;
