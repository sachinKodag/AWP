let btnelement = document.querySelector("#btn");

function comfun() {
    let oldcomment = document.getElementById("comment").value;

    // We will use clonenode not createElement
    const newelement = document.querySelector("#reference").cloneNode(true); //Deep Cloning
    //all clone comment have same it we can remove it
    newelement.removeAttribute("id");
    newelement.style.visibility = "visible";
    //let's store user comment
    newelement.children[0].innerHTML = oldcomment;

    // comment box element
    const commentbox = document.querySelector("#newdiv");

    newdiv.insertBefore(newcomment, newdiv.firstChild);

    document.querySelector("#comment").value = "";
}

function delcom(btnelement) {
    btnelement.appendChild.remove();
}