const socket = io();


$('#chat-container').hide();

$('#login-btn').click(() => {
    socket.emit('login', {
        username:$('#user').val()
    })
    $('#user').val("");
    $('#login').hide();
    $('#chat-container').show();
})

$('#send-btn').click(() => {
    socket.emit('send_msg', {
        msg: $('#inp').val()
    })
    $('#inp').val("");
});

socket.on('recieved_msg', (data) => {
    
    $('#chat').append(`<li> <strong>${data.user}</strong> : ${data.msg}</li>`)
    $("#chat").scrollTop($("#chat").outerHeight());
})
