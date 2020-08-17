var likecount = 0;

// Like JS
function like() {
    var x = document.getElementById("like").value;
    likecount++;
    document.querySelector("#like").innerHTML = "Like " + likecount;
    document.querySelector("#like").style.color = "rgb(68, 68, 161)";
}

// Comment JS
function fun() {
    var oldcomment = document.getElementById("newcomment");
    var comment = document.createElement("div");

    comment.style.backgroundColor = "whitesmoke";
    comment.style.fontFamily = "Aerial";
    comment.style.fontSize = "20px";
    comment.style.padding = "10px"

    var cont = document.getElementById("info").value;
    comment.textContent = cont;

    oldcomment.appendChild(comment);
    document.querySelector("#info").value = '';
}