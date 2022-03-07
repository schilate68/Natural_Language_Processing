var path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const mockAPIResponse = require('./mockAPI.js')
const axios = require('axios')
const { response } = require('express')
dotenv.config();
const https = require("https");
const MeaningCloud = require('meaning-cloud');
const app = express()


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
    console.log(textUrl.url);
    axios
        .post('https://api.meaningcloud.com/sentiment-2.1', {
            key: process.env.API_KEY,
            txt: `${textUrl.url}`,
            lang: "en",
            tt: "a"
        })
        .then(resp => {
            console.log(`statusCode: ${res.status}`)
            console.log(resp.data);
            res.send(resp);
        })
        .catch(error => {
            console.error(error)
        })

})

app.post('/test', function (req, res) {
    console.log("In POST test API");
    console.log(process.env.API_KEY);

    axios
        .post('https://api.meaningcloud.com/sentiment-2.1', {
            key: process.env.API_KEY,
            url: 'https://blog.logrocket.com/complete-guide-flutter-architecture/',
            lang: "en"
        })
        .then(res => ({
            status: res.status,
            body: res.data

        }))
        .then(({ status, body }) => console.log(status, body))
        .catch(error => {
            console.error(error)
        })

})




