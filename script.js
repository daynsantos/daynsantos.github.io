$(document).ready(function(){
    $(window).scroll(function(){

        if(this.scrollY > 20){
            $('.navbarr').addClass("sticky");
        }else{
            $('.navbarr').removeClass("sticky");
        }
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });


    $('.navbarr .navi li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.navi-btn').click(function(){
        $('.navbarr .navi').toggleClass("activee");
        $('.navi-btn i').toggleClass("activee");
    });


    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});