
(function(){
      var d=document; 
	  var x=!d.getElementById('razorpay-embed-btn-js')
      if(x)
	  { var s=d.createElement('script');
	   s.defer=!0;s.id='razorpay-embed-btn-js';
       s.src='https://cdn.razorpay.com/static/embed_btn/bundle.js';
	   d.body.appendChild(s);
	  }
	else{var rzp=window['__rzp__'];
      rzp && rzp.init && rzp.init()}
})();


			document.getElementById('rzp-button1').onclick = function(e){
			axios.post('/orders').then((info)=>{
			console.log(info);
			e.preventDefault();
				var options = {
				"key": "rzp_test_HSs1jKGw5mbqlU", // Enter the Key ID generated from the Dashboard
				"amount": "", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
				"currency": "INR",
				"name": "Donation.com",
				"description": "Test Transaction",
				"image": "image.jpg",
				"order_id": info.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
				"callback_url": "/verify",
				"prefill": {
					"name": "",
					"email": "",
					"contact": ""
				},
				"notes": {
					"address": "Razorpay Corporate Office"
				},
				"theme": {
					"color": "#3399cc"
				}
			};
			var rzp1 = new Razorpay(options);
			rzp1.open();
			
			})
			
		}
			
			