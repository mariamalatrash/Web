
var myPassword = document.getElementById("Password");
var myConfirm = document.getElementById("Confirm");
function myFunction() {
    if(myConfirm.checkValidity()!=myPassword.checkValidity())
        myConfirm.style.backgroundColor="#D93612";
}
