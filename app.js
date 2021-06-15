const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const weatherRoute = require('./routes/weather.route');

app.use('/api', weatherRoute);

app.listen(process.env.PORT || 3201, ()=>{
    console.log('Cors it listening on', process.env.PORT || 3201);
})