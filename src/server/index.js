var path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const mockAPIResponse = require('./mockAPI.js')

dotenv.config();
const app = express()

console.log(process.env.API_KEY);

//TODO: setup POST request for API (use nodefetch or axios)
/* const formdata = new FormData();
formdata.append("key", process.env.API_KEY);
formdata.append("txt", "The football match goals");
formdata.append("lang", "en");  // 2-letter code, like en es fr ...
formdata.append("tt", "a");                     // all topics

const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
};

const response = fetch(`https://api.meaningcloud.com/topics-2.0`, requestOptions)
    .then(response => ({
        status: response.status,
        body: response.json()
    }))
    .then(({ status, body }) => console.log(status, body))
    .catch(error => console.log('error', error)); */


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
