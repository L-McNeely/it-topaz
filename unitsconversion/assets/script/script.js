function calculate() {
    "use strict";
    var form = $( "#calcform" );
    if (form.valid()) {

            var value1 = document.getElementById("value1").value;
            var funit;
            if (document.getElementById("centi").checked) {
                operator = document.getElementById("centi").value;
            }
            if (document.getElementById("meter").checked) {
                operator = document.getElementById("meter").value;
            }
            if (document.getElementById("kmeter").checked) {
                operator = document.getElementById("kmeter").value;
            }
            if (document.getElementById("inch").checked) {
                operator = document.getElementById("inch").value;
            }
            if (document.getElementById("feet").checked) {
                operator = document.getElementById("feet").value;
            }
            if (document.getElementById("yard").checked) {
                operator = document.getElementById("yard").value;
            }
            if (document.getElementById("miles").checked) {
                operator = document.getElementById("miles").value;
            }

            var tunit;
            if (document.getElementById("centi").checked) {
                operator = document.getElementById("centi").value;
            }
            if (document.getElementById("meter").checked) {
                operator = document.getElementById("meter").value;
            }
            if (document.getElementById("kmeter").checked) {
                operator = document.getElementById("kmeter").value;
            }
            if (document.getElementById("inch").checked) {
                operator = document.getElementById("inch").value;
            }
            if (document.getElementById("feet").checked) {
                operator = document.getElementById("feet").value;
            }
            if (document.getElementById("yard").checked) {
                operator = document.getElementById("yard").value;
            }
            if (document.getElementById("miles").checked) {
                operator = document.getElementById("miles").value;
            }


            CalculateResult(value1, funit, tunit);
        }
    }
}
    
    async function CalculateResult(value1, funit, tunit) {
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";
        myURL = myURL + "?value1=" + encodeURIComponent(value1) + "&funit=" + encodeURIComponent(funit) + "&tunit=" + encodeURIComponent(tunit);
        let myCalcObject = await fetch(myURL);
        let myResult = await myCalcObject.text();
        
        document.getElementById("Result").innerHTML = myResult;
}

function clearform() {
    "use strict";
    document.getElementById("value1").value = "";
    document.getElementById("Operand1Msg").innerHTML = "";
    document.getElementById("centi").checked = false;
    document.getElementById("meter").checked = false;
    document.getElementById("kmeter").checked = false;
    document.getElementById("inch").checked = false;
    document.getElementById("feet").checked = false;
    document.getElementById("yard").checked = false;
    document.getElementById("miles").checked = false;
    document.getElementById("centi2").checked = false;
    document.getElementById("meter2").checked = false;
    document.getElementById("kmeter2").checked = false;
    document.getElementById("inch2").checked = false;
    document.getElementById("feet2").checked = false;
    document.getElementById("yard2").checked = false;
    document.getElementById("miles2").checked = false;
    document.getElementById("Result").innerHTML = "";
}

$( "#myform" ).validate({

});