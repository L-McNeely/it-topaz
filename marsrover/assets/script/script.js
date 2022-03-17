async function mars() {
    "use strict";
    var form = $("#myform");
    form.validate();
    if (form.valid()) {

      var apiKey = "bOaXlJFFBrdi03C7G5XRd9Bz1wnUcUCEgvK0cD1B"
      var rover = "";

      if (document.getElementById("curiosity").checked) {
        rover =  document.getElementById("curiosity").value;
      }
      if (document.getElementById("opportunity").checked) {
        rover =  document.getElementById("opportunity").value;
      }
      if (document.getElementById("spirit").checked) {
        rover =  document.getElementById("spirit").value;
      }


      var date = document.getElementById("date").value;

  

      /*var myURL1 = "https://api.polygon.io/v1/meta/symbols/" + StockSymbol + "/company?apiKey=" + apiKey; */
     var myURL1= "https://api.nasa.gov/mars-photos/api/v1/rovers/" + rover + "/photos?earth_date=" + date + "&api_key=" + apiKey;
      var msg1Object = await fetch(myURL1);
      if (msg1Object.status >= 200 && msg1Object.status <= 299) {            
          var msg1JSONText = await msg1Object.text();
          var msg1 = JSON.parse(msg1JSONText);
          /* Your code to process the result goes here  
        display the returned message */
            for (var i = 1; i < 26; i++) {
              
              document.getElementById("image" + i).src = msg1.photos[i].img_src;
              document.getElementById("image" + i).title = msg1.photos[i].camera.full_name;
              document.getElementById("image" + i).href = msg1.photos[i].img_src;
             /* document.getElementById("image" + i).style.display = 'none';*/
                /*var tempdate = new Date(msg1.results[i].t);*/
                /* extract the date string from the value */
                /*stockdate[i] = tempdate.toLocaleDateString();*/
            }
      }
    }
  }  
  function clearform() {
    "use strict";
    /*document.getElementById("rover").value = "";*/
    document.getElementById("curiosity").checked = false;
    document.getElementById("opportunity").checked = false;
    document.getElementById("spirit").checked = false;
    document.getElementById("date").value = "";
}

  $( "#myform" ).validate({

  });