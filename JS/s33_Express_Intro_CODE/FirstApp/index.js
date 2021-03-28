const express = require('express')
const app = express()

console.dir(app)
const port = 8080

// application for every request
// app.use(function (req, res) {
//     console.log("new request")
//     res.send("hellow this is a respone")
// })
app.get('/', function (req, res) {
    res.send("home page")
})
app.get('/cats', function (req, res) {
    res.send('Hello World cats!')
})

app.get('/dogs', function (req, res) {
    res.send('Dogs')
})


app.post('/cats', function (req, res) {
    res.send('diff than get request')
})

//parse request parameters
app.get('/r/:subreddit/:id', function (req, res) {
    const { subreddit, id } = req.params
    res.send(`this is a ${subreddit} ${id} subreddit`)
})

//q and color are key-value pairs in request object
app.get('/search', function (req, res) {
    const { q, color } = req.query;
    if (!q || !color) {
        res.send("no results")
    }
    res.send(`<h1> this is query for ${q} ${color} </h1>`)
})

app.get('*', function (req, res) {
    res.send('wrong path')
})

app.listen(port, function () {
    console.log(`Example app listening at http://localhost:${port}`)
})