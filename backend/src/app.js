const express = require ('express');
const cors = require('cors');
const app = express();
//settings 
app.set('port', process.env.PORT || 4000);
//Middlewares 
app.use(cors());
app.use(express.json());

//routes
app.use('/api/bicis',require ('./routes/bicis.js'));
module.exports = app; 
