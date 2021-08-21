const addButton = document.getElementById('add');
const inp_Add = document.getElementById('inp_add');
let list = document.getElementsByClassName('row')[0];


addButton.addEventListener('click',(e)=>{
    e.preventDefault()
    // adding a todo
    let inp_text = inp_Add.value;
    console.log(inp_text)
    // var singleList = document.createElement('div');
    var singleList = document.createElement('input');

    singleList.value=inp_text
    singleList.innerText = inp_text;
    singleList.disabled=true;
    singleList.classList.add('col');
    singleList.classList.add('li');
    singleList.classList.add('col-md-8');
    // singleList.classList.add('text-center');
    list.appendChild(singleList);
    
    let rightDiv = document.createElement('div');
    list.appendChild(rightDiv);
    rightDiv.classList.add('rght')
    let deleteButton = document.createElement('button');    
    deleteButton.innerHTML=`<i class="fas fa-trash-alt"></i> DELETE`;
    deleteButton.classList.add('btn');
    deleteButton.classList.add('btn-danger');
    deleteButton.classList.add('btn-md');
    // update button create
    let updateButton = document.createElement('button');    
    updateButton.innerHTML=`<i class="fas fa-edit"></i> UPDATE`;
    updateButton.classList.add('btn');
    updateButton.classList.add('btn-warning');
    updateButton.classList.add('btn-md');
    
   
    rightDiv.classList.add('col');
    rightDiv.classList.add('rght');
    rightDiv.classList.add('col-md-4');
    rightDiv.appendChild(deleteButton);
    rightDiv.appendChild(updateButton);
    inp_Add.value="";
    // deleting a child
    deleteButton.onclick = function(){
        list.removeChild(singleList)
        rightDiv.classList.remove('col')
        rightDiv.classList.remove('col-md-4')
        rightDiv.classList.remove('rght');
        deleteButton.remove()
        updateButton.remove()
    }
    // marking a task as complete
    singleList.ondblclick = function(e){
        singleList.classList.toggle('underline');
    }
    //  
    updateButton.onclick = function(){
        singleList.disabled=!singleList.disabled;
        singleList.classList.toggle('bg-white')
    }

})