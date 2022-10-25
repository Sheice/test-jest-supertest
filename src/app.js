import express from "express";
import {v4} from 'uuid';

const app = express();

// middlewares
app.use(express.json());


app.get('/api/ping', (req, res) => {
    res.send("pong")
});

app.get('/api/projects', (req, res) => {
    res.json([]);
});

app.post('/api/projects', (req, res) => {
    const {title, description} = req.body;
    res.json({
        id: v4(),
        title,
        description
    })
})

export default app;