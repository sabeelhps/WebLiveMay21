const btn = document.getElementById('btn');
const inp = document.getElementById('inp');
const list = document.getElementById('list');

const divs = document.querySelectorAll('div');


btn.onclick = function () {
    
    // Getting the text from the input box
    const todoText = inp.value;

    // creating a new li item
    const li = document.createElement('li');

    li.innerText = todoText;

    // adding the li item into ul as a child

    li.onclick = function (event) {
        event.target.remove();
    }


    list.append(li);


    inp.value = "";

}


// divs[0].onclick = function (e) {
//     e.target.remove();
// }


// divs[1].onclick = function (e) {
//     e.target.remove();
// }


// divs[2].onclick = function (e) {
//     e.target.remove();
// }  

for (let div of divs) {
    div.onclick = function (e) {
        e.target.remove()
    }
}







