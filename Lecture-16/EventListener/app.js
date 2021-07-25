// const btn = document.getElementById('btn');

// function scream() {
//     console.log("SCREAM !!");
// }

// function shout() {
//     console.log("SHOUT");
// }

// btn.addEventListener('click', scream);
// btn.addEventListener('click', shout);


// ---------------------------------
// MOUSE EVENTS


// const buttons = document.querySelectorAll('button');

// for (let button of buttons) {
    
//     button.addEventListener('mouseenter', () => {
//         button.classList.add('special');
//     })

//     button.addEventListener('mouseleave', () => {
//         button.classList.remove('special');
//     })

// }


/////////////////Forms Events////////////

const form = document.getElementById('form');


form.addEventListener('submit', (e) => {
    e.preventDefault(); //prevent the form from getting submitted by default
    console.log(form.elements[0].value);
})


// Keyboard Events

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        console.log("YOU HIT THE ENTER KEY");
    }
})


const para = document.getElementById('para');

para.addEventListener('copy', () => {
    alert('Stop Copying Now 😠😠😠😠😠😠')
})






