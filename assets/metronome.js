function firstAlert() {
    alert("this works :)");
}

let buttonId = document.getElementById("button");

buttonId.addEventListener("click", firstAlert());

