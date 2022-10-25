import express from "express";

const app = express();


app.get('/api/ping', (req, res) => {
    res.send("pong")
});

app.get('/api/projects', (req, res) => {
    res.json([]);
})

export default app;