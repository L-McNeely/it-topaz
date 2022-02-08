function circlerad() {
    if ($("#CircleForm").valid()) {
        document.getElementById("diameter").innerHTML = ""
        document.getElementById("circumference").innerHTML = ""
        document.getElementById("area").innerHTML = ""

        var radius;
        var radiusfp;

        radius= document.getElementById("radius").value;
        radiusfp = parseFloat( radius )

        diameter = calcdia(radiusfp)
        area = calcarea(radiusfp)
        circumference = calccir(radiusfp)

        document.getElementById("diameter").innerHTML = diameter.toString();
        document.getElementById("area").innerHTML = area.toString();
        document.getElementById("circumference").innerHTML = circumference.toString();
    }
}

function calcdia(radius) {
    return (2* radius)
}


function calccir(radius) {
    return (2 * Math.PI * radius)
}

function calcarea(radius) {
    return (Math.PI * radius * radius)
}


function clearForm()
        {
            document.getElementById("radius").value = "";
            document.getElementById("radiuserror").innerHTML = "";
            document.getElementById("diameter").innerHTML= "";
            document.getElementById("circumference").innerHTML = "";
            document.getElementById("area").innerHTML = "";
        }

$( "#CircleForm" ).validate({

});