var path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const mockAPIResponse = require('./mockAPI.js')
const axios = require('axios')
dotenv.config();
const app = express()

console.log(process.env.API_KEY);

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


//POST requests

axios
    .post('https://api.meaningcloud.com/topics-2.0', {
        key: process.env.API_KEY,
        txt: "The football match goals",
        lang: "en",
        tt: "a"
    })
    .then(res => {
        console.log(`statusCode: ${res.status}`)
        console.log(res.data)
    })
    .catch(error => {
        console.error(error)
    })
