function fun() {
    var oldcomment = document.getElementById("newcomment");
    var comment = document.createElement("div");

    comment.style.backgroundColor = "whitesmoke";
    comment.style.fontFamily = "Aerial";
    comment.style.fontSize = "20px";

    var cont = document.getElementById("info").value;
    comment.textContent = cont;

    oldcomment.appendChild(comment);

    comment.textContent = ' ';
}