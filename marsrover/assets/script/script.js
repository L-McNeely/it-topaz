async function mars() {
    "use strict";
    var form = $("#myform");
    form.validate();
    if (form.valid()) {

      var apiKey = "bOaXlJFFBrdi03C7G5XRd9Bz1wnUcUCEgvK0cD1B"
      var rover = document.getElementById("rover").value;
      var date = document.getElementById("date").value;

  

      /*var myURL1 = "https://api.polygon.io/v1/meta/symbols/" + StockSymbol + "/company?apiKey=" + apiKey; */
     var myURL1= "https://api.nasa.gov/mars-photos/api/v1/rovers/" + rover + date +"/photos?sol=1000&api_key=" + apikey;
      var msg1Object = await fetch(myURL1);
      if (msg1Object.status >= 200 && msg1Object.status <= 299) {            
          var msg1JSONText = await msg1Object.text();
          var msg1 = JSON.parse(msg1JSONText);
          /* Your code to process the result goes here  
        display the returned message */
        var date = [];
        var numdays = msg1.results.length;
        if (numdays > 0) {
            for (i = 0; i < 25; i++) {
                var tempdate = new Date(msg1.results[i].t);
                /* extract the date string from the value */
                stockdate[i] = tempdate.toLocaleDateString();
            }
        }
        var ctx = document.getElementById("image" + i).src = msg.photos[i].img_src;


      }
    }
  }  
  
  $( "#myform" ).validate({

  });