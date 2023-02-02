const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send('Welcome')
})

const port = process.env.PORT || 1337

app.listen(port, () => {
    console.log('Listening on 8000 port')
})