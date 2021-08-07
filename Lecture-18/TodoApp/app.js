// Mark the todo as completed
$('ul').on('click','li',function () {
    $(this).toggleClass('completed');
})

// creating a new todo

$('input[type="text"]').keypress(function (e) {

    if (e.which === 13) {
        const todoText = $(this).val();
        
        const todo = `<li><span><i class="fas fa-trash-alt"></i></span>${todoText}</li>`

        $('#list').append(todo);
        $(this).val("");
    }   
    
})


// Removing to do

$('ul').on('click', 'span', function (event) {
    
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
    
    event.stopPropagation(); //prevent event bubbeling
})

$('#plus').click(function () {
    $('input[type="text"]').fadeToggle(500);
})


