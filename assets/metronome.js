let meter = 0;
let tempo = 0;
let lineLenght = 0;
let myTimeOut;

function grabMeter() {
    if(document.getElementById("two").checked)
    {
        meter = document.getElementById("two").value;
        console.log(meter);
    }
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

function play1() {
    let sound1 = document.getElementById("beat1");
    sound1.play();
}

function play2() {
    let sound2 = document.getElementById("beat2");
    sound2.play();
}
// Need a function that calculates the setTimeout => 60000 / (meter * 1000);
function counting() {
    let myTime = 60000 / tempo;
    myTimeOut = setTimeout(counting, myTime);
    let newDots = document.getElementById("dots");
    let dotSpan = document.createElement("span");
    newDots.appendChild(dotSpan);
    console.log("linelenght is logged: " + lineLenght);
    lineLenght++;
    if(meter === "four")
    {
        if(lineLenght === 5)
        {
            document.getElementById("dots").innerHTML = "";
            newDots.appendChild(dotSpan);
            lineLenght = 1;
        }
    }
    else if(meter === "three")
    {
        if(lineLenght === 4)
        {
            document.getElementById("dots").innerHTML = "";
            newDots.appendChild(dotSpan);
            lineLenght = 1;
        }
    }
    else if(meter === "two")
    {
        if(lineLenght === 3)
        {
            document.getElementById("dots").innerHTML = "";
            newDots.appendChild(dotSpan);
            lineLenght = 1;
        }
    }

    if(lineLenght === 1)
    {
        play1();
    }
    else if(lineLenght !== 1)
    {
        play2();
    }
    
}

function stopCounting() {
    clearTimeout(myTimeOut);
    document.getElementById("dots").innerHTML = "";
    lineLenght = 0;
}

function grabTempo() {
    tempo = document.getElementById("tempo").value;
    console.log(tempo);
}

function clickButton() {
    grabMeter();
    grabTempo();

    if(meter !== "three" && meter !== "four" && meter !== "two")
    {
        alert("pick a meter");
        location.reload();
    }
    else if(tempo === "")
    {
        alert("select a tempo");
        location.reload();
    }
    counting();
}