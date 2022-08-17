function randAddMeToo(){
    const tall1 = Math.floor(Math.random()*10);
    const tall2 = Math.floor(Math.random()*10);
    return tall1+tall2;
}


function add() {
    const a = document.getElementById("digit1").value;
    const b = document.getElementById("digit2").value;
    const result = Number(a)+Number(b);


    return document.getElementById('result').innerHTML = result;
}

function subtraction(){
    const a = document.getElementById("digit1").value;
    const b = document.getElementById("digit2").value;
    const result = Number(a)-Number(b);

    return document.getElementById('result').innerHTML = result;
}


function division(){
    const a = document.getElementById("digit1").value;
    const b = document.getElementById("digit2").value;
    const result = Number(a)/Number(b);

    return document.getElementById('result').innerHTML = result;

}
function multi(){
    const a = document.getElementById("digit1").value;
    const b = document.getElementById("digit2").value;
    const result = Number(a)*Number(b);

    return document.getElementById('result').innerHTML = result;

}

function rotateMe(){
    document.getElementById("camel1").style.transform="rorate(20deg)";

}
console.log(this);