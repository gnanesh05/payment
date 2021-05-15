const express = require('express');
const app = express();
const ejs = require('ejs');
const razorpay = require('razorpay');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

require('dotenv').config();
const rpay = new razorpay({
	key_id: process.env.key_id,
	key_secret: process.env.key_secret
});

app.set("view engine","ejs");

app.get("/",(req,res)=>{
	res.render('home');
})












let port = 3000;
app.listen(port, () => {
console.log(`app listening at http://localhost:${port}`)

  });