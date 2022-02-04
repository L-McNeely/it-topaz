function circlerad() {
    if ($("#circleform").valid()) {
        document.getElementById("diameter").innerHTML = ""

        var radius;
        var radiusfp;

        radius= document.getElementById("radius").value;
        radiusfp = parseFloat( radius )
        diameter = calcdia(radius)
        document.getElementById("diameter").innerHTML = diameter.tostring();
    }
}

function calcdia(radius) {
    return (2* radius)
}


function circlecir() {
    if ($("#circleform").valid()) {
        document.getElementById("circumference").innerHTML = ""

        var radius;
        var radiusfp;

        radius= document.getElementById("radius").value;
        radiusfp = parseFloat( radius )
        circumference = calccir(radius)
        document.getElementById("circumference").innerHTML = circumference.tostring();
    }
}
function calccir(radiusvalue) {
    return (2 * 3.14 * radius)
}

function circlearea() {
    if ($("#circleform").valid()) {
        document.getElementById("area").innerHTML = ""

        var radius;
        var radiusfp;

        radius= document.getElementById("radius").value;
        radiusfp = parseFloat( radius )
        area = calcarea(radius)
        document.getElementById("area").innerHTML = area.tostring();
    }
}
function calcdia(radius) {
    return math.sqrt(3.14 * radius)
}


function clearForm()
        {
            document.getElementById("radius").value = "";
            document.getElementById("radiuserror").innerHTML = "";
            document.getElementById("diameter").value = "";
            document.getElementById("circumference").innerHTML = "";
            document.getElementById("area").innerHTML = "";
        }

$( "#CircleForm" ).validate({

});