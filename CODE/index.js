$(document).ready(function(){

// header scroll 이동
$('#menu_wrap li:nth-child(1)').click(function(){

    $('html,body').animate({
        scrollTop: 0,
    },500);
});

$('#menu_wrap li:nth-child(2)').click(function(){

    $('html,body').animate({
        scrollTop: 900,
    },500);
});
$('#menu_wrap li:nth-child(3)').click(function(){

    $('html,body').animate({
        scrollTop: 1730,
    },500);
});
$('#menu_wrap li:nth-child(4)').click(function(){

    $('html,body').animate({
        scrollTop: 3160,
    },500);
});


// 인포그래픽
$('#p_btn').click(function(){
    $('#hidden').css({
        display: 'block',
    });
});

$('#close').click(function(){
    $('#hidden').css({
        display: 'none',
    });
});


// artwork

$('#left_art img').click(function(){
    $(this).clone().appendTo('#top_big');
});

$('#right_art img').click(function(){
    $(this).clone().appendTo('#bottom_big');
});






});//end