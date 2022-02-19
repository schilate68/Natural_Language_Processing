var path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const mockAPIResponse = require('./mockAPI.js')
const axios = require('axios')
dotenv.config();
const app = express()

console.log(process.env.API_KEY);

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


//POST request API Meaning Cloud
app.post('/text', function (req, res) {
    console.log("In POST text");
    const textUrl = req.body;
    axios
        .post('https://api.meaningcloud.com/sentiment-2.1', {
            key: process.env.API_KEY,
            txt: "You are sure about that?",
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

})




