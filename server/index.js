const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));


app.use(cors());

app.use('/api/events', require('./routes/events'));
app.use('/api/services', require('./routes/services'));

app.get('/', (req, res) => {
    res.json({message: "bltnbrd api. please visit bltnbrd.online/ for more information."});
});

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => 
        app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
    )
    .catch((error) => 
        console.log(error.message)
    );