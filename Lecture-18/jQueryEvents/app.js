// $('h1').click(function () {
//     $('h1').addClass('special');
//     console.log("Someone Clicked Me!");
// })



$('h1').on('mouseenter', function () {
    $('h1').toggleClass('special');
})

// $('h1').on('mouseleave', function () {
//     $('h1').removeClass('special');
// })


$('li').on('mouseenter', function () {
    $(this).addClass('one');
})

$('li').on('mouseleave', function () {
    $(this).removeClass('one');
})


