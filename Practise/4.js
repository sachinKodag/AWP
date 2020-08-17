var comt = document.getElementById("comm");

function fun() {
    var newdiv = document.createElement("div");
    var newcontent = document.createTextNode("printing from js");
    newdiv.appendChild(newcontent);

    var currentdiv = document.getElementById("newdiv");
    document.body.insertBefore(newdiv, currentdiv);
}