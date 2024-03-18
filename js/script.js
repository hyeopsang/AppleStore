$('.menu > ul > li').mouseover(function(){
    $('#header').addClass('wh');
    $(this).find('.depth2').stop().slideDown(300)
    $('#container').addClass('blur');
}).mouseout(function(){
    $('#header').removeClass('wh');
    $(this).find('.depth2').stop().slideUp(300)
    $('#container').removeClass('blur');
})
$('.icM_in > ul > li').mouseover(function(e){
    e.preventDefault()
    $(this).find('.depth2').stop().slideDown()
    $('#container').addClass('blur');
}).mouseout(function(){
    $(this).find('.depth2').stop().slideUp()
    $('#container').removeClass('blur');
})

$('.m1List').slick({
    Infinite: true,
    slidesToShow: 1,
    slideToScroll: 1,
    initialSlide : 0,
    arrows: false,
    nextArrow: ".next",
    prevArrow: ".prev",
    variableWidth: true
})
$('.btns').mouseover(function(){
    $(this).find('.next').show()
})
$('.m2List').slick({
    slidesToShow: 1,
    slideToScroll: 1,
    variableWidth: true,
    arrows : false
})
$('.m3List').slick({
    slidesToShow: 1,
    slideToScroll: 1,
    variableWidth: true,
    arrows : false
})
$('.m4List').slick({
    slidesToShow: 1,
    slideToScroll: 1,
    variableWidth: true,
    arrows : false
})
$('.m5List').slick({
    slidesToShow: 1,
    slideToScroll: 1,
    variableWidth: true,
    arrows : false,
    responsive : [
        {
            breakpoint : 768,
            settings : {
               slideToShow : 3
            }
        }
    ]
})
$('.fTap h3').click(function(e){
    e.preventDefault();
    let d = $(this).siblings('.tapList').css('display');
    if(d == 'none'){
        $('.fTap h3').removeClass('active');
        $('.fTap .tapList').slideUp();
        $(this).addClass('active');
        $(this).siblings('.tapList').slideDown();
    } else {
        $(this).removeClass('active');
        $(this).siblings('.tapList').slideUp();
    }
});
