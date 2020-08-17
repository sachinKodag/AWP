function subfun() {
    var x = document.getElementById("nameId").value;
    var y = document.getElementById("passId").value;

    if (x == "") {
        alert("Name Must Be enter");
    }

    if (y == "") {
        alert("Password must be enter");
    }

    var s = document.getElementById("nameId").value;
    var a = document.getElementById("passId").value;
    var c = document.getElementById("output");
    c.textContent = "Username is: " + s + " And Password is: " + s;


    document.getElementById("nameId").value = " ";
    document.getElementById("passId").value = " ";
}