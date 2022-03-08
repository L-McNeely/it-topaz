  async function show() {
    "use strict";
    var form = $("#curform");
        form.validate();
    if (form.valid()) {

              var StockSymbol = document.getElementById("StockSymbol").value;
        var apiKey = "Db4JZ9GsiHPJLU6ZDUvhn35T0uiswVSn"
        var FromDate = document.getElementById("FromDate").value;
        var ToDate = document.getElementById("ToDate").value;
        var FromCurrency = "EUR";
        var ToCurrency = "USD";
  

            /*var myURL1 = "https://api.polygon.io/v1/meta/symbols/" + StockSymbol + "/company?apiKey=" + apiKey; */
            myURL1 = "https://api.polygon.io/v2/aggs/ticker/C:" + FromCurrency + ToCurrency + "USD/range/1/day/" + FromDate +"/" + ToDate + "?adjusted=true&sort=asc&limit=120&apiKey=" + apiKey;
            var msg1Object = await fetch(myURL1);
                    if (msg1Object.status >= 200 && msg1Object.status <= 299) {            
            var msg1JSONText = await msg1Object.text();
            var msg1 = JSON.parse(msg1JSONText);
            document.getElementById("company").innerHTML = msg1.name;
            document.getElementById("address").innerHTML = msg1.hq_address;
            document.getElementById("employees").innerHTML = msg1.employees;
            document.getElementById("ceo").innerHTML = msg1.ceo;
            document.getElementById("url").innerHTML = msg1.url;
            document.getElementById("url").href = msg1.url;
            document.getElementById("logo").src = msg1.logo;
        }
  
  
  
  
  
  
  /* Db4JZ9GsiHPJLU6ZDUvhn35T0uiswVSn */