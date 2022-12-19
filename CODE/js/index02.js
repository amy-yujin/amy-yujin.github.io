$(document).ready(function(){


    // top버튼 동작
    $('#top_btn').click(function(){

        $('html,body').animate({
            scrollTop: 0,
        },800);

    });

    $(window).scroll(function(){
        sct = $(window).scrollTop();

        if(sct > 300){  
            $('#top_btn').css('opacity',1);                
        }else{
            $('#top_btn').css('opacity',0);
        }

    });

    //header 동작 

    $('#ham').click(function(){
        $('#hidden_wrap').animate({
            right: 0,
        });
    });
    $('#hidden_close').click(function(){
        $('#hidden_wrap').animate({
            right: -350,
        });
    });

    

    

    // 슬라이드 동작 


    var new_w = $('.s_new').width()+40;
    var cel_w = $('.cel').width()+26;
    // var mo_new = $('.s_new').width()+40;
    // var mo_cel = $('.cel').width();

    function slideN (btn,wrap,width,elmt){

        $(btn).click(function(){
            $(wrap).animate({
                left : -width*2,
            },1000,function(){
                $(wrap).css({
                    left : -width,
                }).find(elmt).first().appendTo(wrap);
            });
        });
    }

    function slideP (btn,wrap,width,elmt){

        $(btn).click(function(){
            $(wrap).animate({
                left : 0,
            },1000,function(){
                $(wrap).css({
                    left : -width,
                }).find(elmt).last().prependTo(wrap);
            });
        });
    }


    slideN('#next01','#s_mask',new_w,'.s_new')
    slideP('#prev01','#s_mask',new_w,'.s_new')
    slideN('#next02','#c_mask',new_w,'.c_new')
    slideP('#prev02','#c_mask',new_w,'.c_new')
    slideN('#fake_btn','#cel_wrap',cel_w,'.cel')

    
    
    

    //cel 자동 슬라이드
    function rMove(elmt){
        si = setInterval(function(){
            $(elmt).trigger('click');
        },2000);
    }
    rMove('#fake_btn')
    // rMove('#next01')
    // rMove('#next02')


    // sec01 배너 fade

    var fi = 6;

    $('#mbn_wrap').click(function(){

        fi--;
        if(fi==0){
            $('#mbn_wrap img').fadeIn(1000);
            fi=6;
        }else{
            $('#mbn_wrap img').eq(fi).fadeOut(1000);
        }

    });
    
    setInterval(function(){
        $('#mbn_wrap').trigger('click');
    },4000);
    





    // big 이미지 동작

    $('.best img').click(function(){
        $(this).clone().appendTo('#big_img');
    });


    $('.md img').click(function(){
        $(this).clone().appendTo('#big_md');
    });








});//end