var express = require('express');
const { tags } = require('./handlers/tags')
var app = express();
const PORT = process.env.PORT || 5050

app.get('/', (req, res) => {
    res.send('Testing... hello from pinbird server')
})

app.get('/tags', tags);

app.post('/tag', createTag)


app.listen(PORT, function () {
    console.log(`Pinbird project at: ${PORT}!`);
});

