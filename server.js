const express = require('express');
const app = express();
const ejs = require('ejs');
const RazorPay = require('razorpay');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));


const razorpay = new RazorPay({
	key_id: process.env.KEY_ID,
	key_secret: process.env.SECRET_KEY
});

app.set("view engine","ejs");

app.get("/",(req,res)=>{
	res.render('home');
})

app.post('/orders',(req,res)=>{
	let options = {
     amount: 50000,  // amount in the smallest currency unit
     currency: "INR"
};
razorpay.orders.create(options, function(err, order) {
 if(err)
	 console.log(err);
	
  console.log(order);
  return res.json(order);
});
})


app.post('/verify',(req,res)=>{
	
	razorpay.payments.fetch(req.body.razorpay_payment_id).then((doc)=>{
		if(doc.status === 'captured')
			{
				res.redirect('/');
			}
		else{
			res.send("failed");
		}
	})
	;
})











let port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`app listening at http://localhost:${port}`)

  });