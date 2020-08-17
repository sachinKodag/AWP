var likecount = 0;
var comcount = 0;
var sharecount = 0;

function likefun() {
    likecount++;
    document.getElementById("like").innerHTML = "Like " + likecount;
}

function sharefun() {
    sharecount++;
    document.getElementById("share").innerHTML = "Share " + sharecount;
}

function commentfun() {
    var oldcomment = document.getElementById("newcomment");

    var comment = document.createElement("div");

    var newcomment = document.getElementById("comm").value;
    comment.style.backgroundColor = "whitesmoke";
    comment.style.fontFamily = "Aerial";
    comment.style.fontSize = "20px";
    comment.style.padding = "10px";

    comment.textContent = newcomment;
    oldcomment.appendChild(comment);

    document.querySelector("#comm").value = "";
}