function calculate() {
    "use strict";
    var form = $( "#calcform" );
    if (form.valid()) {

        var value1 = document.getElementById("value1").value;
        var funit;
        var operator;
        if (document.getElementById("centi").checked) {
            funit = document.getElementById("centi").value;
        }
        if (document.getElementById("meter").checked) {
            funit = document.getElementById("meter").value;
        }
        if (document.getElementById("kmeter").checked) {
            funit = document.getElementById("kmeter").value;
        }
        if (document.getElementById("inch").checked) {
            funit = document.getElementById("inch").value;
        }
        if (document.getElementById("feet").checked) {
            funit = document.getElementById("feet").value;
        }
        if (document.getElementById("yard").checked) {
            funit = document.getElementById("yard").value;
        }
        if (document.getElementById("miles").checked) {
            funit = document.getElementById("miles").value;
        }

        var tunit;
        if (document.getElementById("centi2").checked) {
            tunit = document.getElementById("centi2").value;
        }
        if (document.getElementById("meter2").checked) {
            tunit = document.getElementById("meter2").value;
        }
        if (document.getElementById("kmeter2").checked) {
            tunit = document.getElementById("kmeter2").value;
        }
        if (document.getElementById("inch2").checked) {
            tunit = document.getElementById("inch2").value;
        }
        if (document.getElementById("feet2").checked) {
            tunit = document.getElementById("feet2").value;
        }
        if (document.getElementById("yard2").checked) {
            tunit = document.getElementById("yard2").value;
        }
        if (document.getElementById("miles2").checked) {
            tunit = document.getElementById("miles2").value;
        }
        
        CalculateResult(value1, funit, tunit);
    }
}
    
    async function CalculateResult(value1, funit, tunit) {
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";
        myURL = myURL + "?FromValue=" + encodeURIComponent(value1) + "&FromUnit=" + encodeURIComponent(funit) + "&ToUnit=" + encodeURIComponent(tunit);
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