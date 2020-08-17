var count = 0;
var commcount = 0;

function like() {
    count++;
    let likeelement = document.querySelector("#likeid");
    likeelement.innerHTML = "Like " + count;
    likeelement.style.color = "blue";
}

function commentHere() {
    commcount++;
    const newElement = document.createElement("div");
    newElement.innerHTML = "Comment No:- " + commcount;
    document.body.appendChild(newElement);
}
