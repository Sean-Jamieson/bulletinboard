const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const { auth, requiresAuth } = require('express-openid-connect');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use(
    auth({
        authRequired: false,
        auth0Logout: true,
        issuerBaseURL: process.env.ISSUER_BASE_URL,
        baseURL: process.env.BASE_URL,
        clientID: process.env.CLIENT_ID,
        secret: process.env.SECRET,
    })
);

app.use('/api/events', require('./routes/events'));
app.use('/api/services', require('./routes/services'));

app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? "Logged in." : "Logged out.")
});

app.get('/profile', requiresAuth(), (req,res) => {
    res.send(JSON.stringify(req.oidc.user));
});

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => 
        app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
    )
    .catch((error) => 
        console.log(error.message)
    );