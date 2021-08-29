
function refreshList() {
    
    $('#list').empty();

    $.get('/todo', function (data) {
        for (let item of data) {
            $('#list').append(`<li>${item}</li>`);
        }
    })

}

refreshList();



$('#btn').click(function () {
    const todo = $('#inp').val();

    $.post('/todo', { todo }, function () {
        console.log("Done");
        refreshList();
    })
    $('#inp').val("");
})