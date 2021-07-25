const btn = document.getElementById('btn');


function fun(event) {
    console.log(event.target); //important
    console.log('DONT DARE TO CLICK ME AGAIN!');
}


function shout() {
    console.log("SHOUT!!!!!");
}

function scream() {
    console.log("SCREAM!!!");
}

btn.onclick = shout;
btn.onclick = scream;

