async function show() {
    "use strict";
    var form = $("#myform");
    form.validate();
    if (form.valid()) {

      var apiKey = "bOaXlJFFBrdi03C7G5XRd9Bz1wnUcUCEgvK0cD1B"
      var FromDate = document.getElementById("FromDate").value;
      var ToDate = document.getElementById("ToDate").value;
      var FromCurrency = document.getElementById("Bcur").value;
      var ToCurrency = document.getElementById("Ccur").value;
  

      /*var myURL1 = "https://api.polygon.io/v1/meta/symbols/" + StockSymbol + "/company?apiKey=" + apiKey; */
     /* var myURL1 = "https://api.polygon.io/v2/aggs/ticker/C:" + FromCurrency + ToCurrency + "/range/1/day/" + FromDate +"/" + ToDate + "?adjusted=true&sort=asc&limit=32&apiKey=" + apiKey;*/
     var myURL1= "https://api.nasa.gov/mars-photos/api/v1/rovers/" + rover + "/photos?" + date "=2015-6-3&api_key=" + apiKey;
      var msg1Object = await fetch(myURL1);
      if (msg1Object.status >= 200 && msg1Object.status <= 299) {            
          var msg1JSONText = await msg1Object.text();
          var msg1 = JSON.parse(msg1JSONText);
          /* Your code to process the result goes here  
        display the returned message */
        var stockdate = [];
        var stockvalue = [];
        var stockvolume = [];
        var numdays = msg1.results.length;
        if (numdays > 0) {
            for (i = 0; i < 25; i++) {
                /* stock close value */
                stockvalue[i] = msg1.results[i].c;
                /* stock volume */
                stockvolume[i] = msg1.results[i].v;
                /* date is in Unix milleseconds - create a temporary date variable */
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