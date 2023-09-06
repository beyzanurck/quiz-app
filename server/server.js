import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({ message: "Test" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});