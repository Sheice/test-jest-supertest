import express from "express";

const app = express();

app.listen(3000);

app.get('/api/ping', (req, res) => {
    res.send("pong")
})

console.log(`Server listening on Port ${3000}`);