let meter = 0;
let tempo = 0;
let array = [];
let myTimeOut;

function grabMeter() {
    if(document.getElementById("three").checked)
    {
        meter = document.getElementById("three").value;
        console.log(meter);
    }
    else if(document.getElementById("four").checked)
    {
        meter = document.getElementById("four").value;
        console.log(meter);
    }    
}

// Need a function that calculates the setTimeout => 60000 / (meter * 1000);
function counting() {
    let myTime = 60000 / tempo;
    myTimeOut = setTimeout(counting, myTime);
    console.log("this");
    let newDots = document.getElementById("dots");
    let dotSpan = document.createElement("span");
    // dotSpan.style.border =  "3px solid black";
    // dotSpan.style.height = "300px";
    // dotSpan.style.width = "300px";
    // dotSpan.style.marginLeft = "10px";
    // dotSpan.style.backgroundColor = "purple";
    array.push(dotSpan);
    newDots.appendChild(dotSpan);
}

function stopCounting() {
    clearTimeout(myTimeOut);
    document.getElementById("dots").innerHTML = "";
}

function grabTempo() {
    tempo = document.getElementById("tempo").value;
    console.log(tempo);
}

function clickButton() {
    grabMeter();
    grabTempo();
    counting();

    if(meter !== "three" && meter !== "four")
    {
        alert("pick a meter");
    }
}