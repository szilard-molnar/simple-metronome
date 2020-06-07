let meter = 0;
let tempo = 0;

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
    setTimeout(counting, 1000);
    console.log("bullshit");
}

function grabTempo() {
    tempo = document.getElementById("tempo").value;
    console.log(tempo);
}

function clickButton() {
    grabMeter();
    grabTempo();
    counting();
}