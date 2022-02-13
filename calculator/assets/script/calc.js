function calculate() {
    if ($( "#calcform" ).valid()) {

        var operand1 = document.getElementById("Operand1").value;
        var operand2 = document.getElementById("Operand2").value;
        var operand3 = document.getElementById("Operand3").value;

        var operand1fp = parseFloat (operand1);
        var operand2fp = parseFloat (operand2);
        var operand3fp = parseFloat (operand3);

        if (document.getElementById("MinOperator").checked) {
            operator = document.getElementById("MinOperator").value;
        }
        if (document.getElementById("MaxOperator").checked) {
            operator = document.getElementById("MaxOperator").value;
        }
        if (document.getElementById("AvgOperator").checked) {
            operator = document.getElementById("AvgOperator").value;
        }

        var result;

        if (operator == "Min") {
            if(operand1fp <= operand2fp && operand1fp <= operand3fp) {
                result = operand1fp;
            }
            if(operand2fp <= operand1fp && operand2fp <= operand3fp) {
                result = operand2fp;
            }
            if(operand3fp <= operand1fp && operand3fp <= operand2fp) {
                result = operand3fp;
            }
        }
        if (operator == "Max") {
            if(operand1fp >= operand2fp && operand1fp >= operand3fp) {
                result = operand1fp;
            }
            if(operand2fp >= operand1fp && operand2fp >= operand3fp) {
                result = operand2fp;
            }
            if(operand3fp >= operand1fp && operand3fp >= operand2fp) {
                result = operand3fp;
            }
        }
        if (operator == "Avg") {
            result = (operand1fp + operand2fp + operand3fp) / 3.0;
        }
        
        document.getElementById("Result").innerHTML = result.toString();
    }
}

function clearform() {
    
    document.getElementById("Operand1").value = "";
    document.getElementById("Operand2").value = "";
    document.getElementById("Operand3").value = "";
    document.getElementById("Operand1Error").innerHTML = "";
    document.getElementById("Operand2Error").innerHTML = "";
    document.getElementById("Operand3Error").innerHTML = "";
    document.getElementById("MinOperator").checked = false;
    document.getElementById("MaxOperator").checked = false;
    document.getElementById("AvgOperator").checked = false;
    document.getElementById("OperatorError").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

$( "#calcform" ).validate({
 
});
