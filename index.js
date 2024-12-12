require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000 ;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello Blood Guard API SERVICE')
})

app.get('/hello', (req, res) => {
    res.send('Hello new assam Blood Guard API SERVICE')
})

app.listen(port, () => {
    console.log(`Server listening at  http://localhost:${port}`)
})