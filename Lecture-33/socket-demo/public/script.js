const socket = io();


$('#btn').click(() => {
    socket.emit('send_msg', {
        msg: $('#inp').val()
    });
    $('#inp').val("");
});

socket.on('recieved_msg', (data) => {
    $('#chat').append(`<li>${data.user} says ${data.msg}</li>`)
})







