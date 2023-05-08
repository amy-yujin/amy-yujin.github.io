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
        scrollTop: 2600,
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



// banner

$('.banner').click(function(){
    $('#hidden_b').css({
        display: 'block',
    });
});

$('#close02').click(function(){
    $('#hidden_b').css({
        display: 'none',
    });
});



i=3;

$('#hidden_b #ban_con').click(function(){

    i--;
    if(i==0){
        $('.ban').fadeIn(1000);
        i=3;
    }else{
        $('.ban').eq(i).fadeOut(1000);
    }

});

setInterval(function(){
    $('#hidden_b #ban_con').trigger('click');
},3000);





});//end