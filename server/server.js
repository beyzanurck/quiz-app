import express, { response } from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({ message: "Test" });
});

app.get('/animals', (req, res) => {
    fetch('https://opentdb.com/api.php?amount=5&category=27&difficulty=easy&type=multiple')
    .then(response => {
    return response.json()
    })
    .then(apiData => {
    res.json(apiData);
    })
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});