// JavaScript source code
function getData() {
    var d = new Date();
    var y = d.getFullYear();
    document.getElementById("year").innerHTML = y;
}

function openTab(x) {
    for (i = 1; i <= 4; i++) {
        document.getElementById("d" + i + "").style.display = "none";
    }
    y = x.charAt(1);
    document.getElementById("d" + y + "").style.display = "inline";
}

function showLabel(x) {
    y = x.substring(2, 4);
    document.getElementById("lb" + y + "").style.display = "inline";
}

function hideLabel(x) {
    y = x.substring(2, 4);
    document.getElementById("lb" + y + "").style.display = "none";
}