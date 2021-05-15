const express = require('express');
const app = express();
const ejs = require('ejs');
const razorpay = require('razorpay');
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// const rpay = new razorpay({
// 	key_id: 'rzp_test_TsmEtUBYBqS4pn',
// 	key_secret: 'MH5NREh3fzzcSHXu937lEoxE'
// });

app.set("view engine","ejs");

app.get("/",(req,res)=>{
	res.render('home');
})












let port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`app listening at http://localhost:${port}`)

  });