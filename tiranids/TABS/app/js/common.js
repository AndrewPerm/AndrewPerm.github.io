// $(function() {
//
// 	// Custom JS
//     var mobileMenuOutsideClick = function() {
//
//         $(document).click(function (e) {
//             var container = $("#offcanvas, .js-nav-toggle");
//             if (!container.is(e.target) && container.has(e.target).length === 0) {
//
//                 if ( $('body').hasClass('offcanvas') ) {
//
//                     $('body').removeClass('offcanvas');
//                     $('.js-nav-toggle').removeClass('active');
//
//                 }
//
//
//             }
//         });
//
//     };
//
//
//     var offcanvasMenu = function() {
//
//         $('#page').prepend('<div id="offcanvas" />');
//         $('#page').prepend('<a href="#" class="js-nav-toggle nav-toggle nav-white"><i></i></a>');
//         var clone1 = $('.menu-1 > ul').clone();
//         $('#offcanvas').append(clone1);
//         var clone2 = $('.menu-2 > ul').clone();
//         $('#offcanvas').append(clone2);
//
//         $('#offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
//         $('#offcanvas')
//             .find('li')
//             .removeClass('has-dropdown');
//
//         // Hover dropdown menu on mobile
//         $('.offcanvas-has-dropdown').mouseenter(function(){
//             var $this = $(this);
//
//             $this
//                 .addClass('active')
//                 .find('ul')
//                 .slideDown(500, 'easeOutExpo');
//         }).mouseleave(function(){
//
//             var $this = $(this);
//             $this
//                 .removeClass('active')
//                 .find('ul')
//                 .slideUp(500, 'easeOutExpo');
//         });
//
//
//         $(window).resize(function(){
//
//             if ( $('body').hasClass('offcanvas') ) {
//
//                 $('body').removeClass('offcanvas');
//                 $('.js-nav-toggle').removeClass('active');
//
//             }
//         });
//     };
//
//
//     var burgerMenu = function() {
//
//         $('body').on('click', '.js-nav-toggle', function(event){
//             var $this = $(this);
//
//
//             if ( $('body').hasClass('overflow offcanvas') ) {
//                 $('body').removeClass('overflow offcanvas');
//             } else {
//                 $('body').addClass('overflow offcanvas');
//             }
//             $this.toggleClass('active');
//             event.preventDefault();
//
//         });
//     };
//
//
//
//     var contentWayPoint = function() {
//         var i = 0;
//         $('.animate-box').waypoint( function( direction ) {
//
//             if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
//
//                 i++;
//
//                 $(this.element).addClass('item-animate');
//                 setTimeout(function(){
//
//                     $('body .animate-box.item-animate').each(function(k){
//                         var el = $(this);
//                         setTimeout( function () {
//                             var effect = el.data('animate-effect');
//                             if ( effect === 'fadeIn') {
//                                 el.addClass('fadeIn animated-fast');
//                             } else if ( effect === 'fadeInLeft') {
//                                 el.addClass('fadeInLeft animated-fast');
//                             } else if ( effect === 'fadeInRight') {
//                                 el.addClass('fadeInRight animated-fast');
//                             } else {
//                                 el.addClass('fadeInUp animated-fast');
//                             }
//
//                             el.removeClass('item-animate');
//                         },  k * 200, 'easeInOutExpo' );
//                     });
//
//                 }, 100);
//
//             }
//
//         } , { offset: '85%' } );
//     };
//
//
//     var dropdown = function() {
//
//         $('.has-dropdown').mouseenter(function(){
//
//             var $this = $(this);
//             $this
//                 .find('.dropdown')
//                 .css('display', 'block')
//                 .addClass('animated-fast fadeInUpMenu');
//
//         }).mouseleave(function(){
//             var $this = $(this);
//
//             $this
//                 .find('.dropdown')
//                 .css('display', 'none')
//                 .removeClass('animated-fast fadeInUpMenu');
//         });
//
//     };
//
//
//     var testimonialCarousel = function(){
//
//         var owl = $('.owl-carousel-fullwidth');
//         owl.owlCarousel({
//             items: 1,
//             loop: true,
//             margin: 0,
//             nav: false,
//             dots: true,
//             smartSpeed: 800,
//             autoHeight: true
//         });
//
//     };
//
//     var tabs = function() {
//
//         // Auto adjust height
//         $('.tab-content-wrap').css('height', 0);
//         var autoHeight = function() {
//
//             setTimeout(function(){
//
//                 var tabContentWrap = $('.tab-content-wrap'),
//                     tabHeight = $('.tab-nav').outerHeight(),
//                     formActiveHeight = $('.tab-content.active').outerHeight(),
//                     totalHeight = parseInt(tabHeight + formActiveHeight + 90);
//
//                 tabContentWrap.css('height', totalHeight );
//
//                 $(window).resize(function(){
//                     var tabContentWrap = $('.tab-content-wrap'),
//                         tabHeight = $('.tab-nav').outerHeight(),
//                         formActiveHeight = $('.tab-content.active').outerHeight(),
//                         totalHeight = parseInt(tabHeight + formActiveHeight + 90);
//
//                     tabContentWrap.css('height', totalHeight );
//                 });
//
//             }, 100);
//
//         };
//
//         autoHeight();
//
//
//         // Click tab menu
//         $('.tab-nav a').on('click', function(event){
//
//             var $this = $(this),
//                 tab = $this.data('tab');
//
//             $('.tab-content')
//                 .addClass('animated-fast fadeOutDown');
//
//             $('.tab-nav li').removeClass('active');
//
//             $this
//                 .closest('li')
//                 .addClass('active')
//
//             $this
//                 .closest('.tabs')
//                 .find('.tab-content[data-tab-content="'+tab+'"]')
//                 .removeClass('animated-fast fadeOutDown')
//                 .addClass('animated-fast active fadeIn');
//
//
//             autoHeight();
//             event.preventDefault();
//
//         });
//     };
//
//
//
//     $(function(){
//         mobileMenuOutsideClick();
//         offcanvasMenu();
//         burgerMenu();
//         contentWayPoint();
//         dropdown();
//         testimonialCarousel();
//         tabs();
//     });
//
// });



;(function () {

    'use strict';

    var mobileMenuOutsideClick = function() {

        $(document).click(function (e) {
            var container = $("#offcanvas, .js-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {

                if ( $('body').hasClass('offcanvas') ) {

                    $('body').removeClass('offcanvas');
                    $('.js-nav-toggle').removeClass('active');

                }


            }
        });

    };


    var offcanvasMenu = function() {

        $('#page').prepend('<div id="offcanvas" />');
        $('#page').prepend('<a href="#" class="js-nav-toggle nav-toggle nav-white"><i></i></a>');
        var clone1 = $('.menu-1 > ul').clone();
        $('#offcanvas').append(clone1);
        var clone2 = $('.menu-2 > ul').clone();
        $('#offcanvas').append(clone2);

        $('#offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
        $('#offcanvas')
            .find('li')
            .removeClass('has-dropdown');

        // Hover dropdown menu on mobile
        $('.offcanvas-has-dropdown').mouseenter(function(){
            var $this = $(this);

            $this
                .addClass('active')
                .find('ul')
                .slideDown(500, 'easeOutExpo');
        }).mouseleave(function(){

            var $this = $(this);
            $this
                .removeClass('active')
                .find('ul')
                .slideUp(500, 'easeOutExpo');
        });


        $(window).resize(function(){

            if ( $('body').hasClass('offcanvas') ) {

                $('body').removeClass('offcanvas');
                $('.js-nav-toggle').removeClass('active');

            }
        });
    };


    var burgerMenu = function() {

        $('body').on('click', '.js-nav-toggle', function(event){
            var $this = $(this);


            if ( $('body').hasClass('overflow offcanvas') ) {
                $('body').removeClass('overflow offcanvas');
            } else {
                $('body').addClass('overflow offcanvas');
            }
            $this.toggleClass('active');
            event.preventDefault();

        });
    };



    var contentWayPoint = function() {
        var i = 0;
        $('.animate-box').waypoint( function( direction ) {

            if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function(){

                    $('body .animate-box.item-animate').each(function(k){
                        var el = $(this);
                        setTimeout( function () {
                            var effect = el.data('animate-effect');
                            if ( effect === 'fadeIn') {
                                el.addClass('fadeIn animated-fast');
                            } else if ( effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated-fast');
                            } else if ( effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated-fast');
                            } else {
                                el.addClass('fadeInUp animated-fast');
                            }

                            el.removeClass('item-animate');
                        },  k * 20, 'easeInOutExpo' );
                    });

                }, 1);

            }

        } , { offset: '85%' } );
    };


    var dropdown = function() {

        $('.has-dropdown').mouseenter(function(){

            var $this = $(this);
            $this
                .find('.dropdown')
                .css('display', 'block')
                .addClass('animated-fast fadeInUpMenu');

        }).mouseleave(function(){
            var $this = $(this);

            $this
                .find('.dropdown')
                .css('display', 'none')
                .removeClass('animated-fast fadeInUpMenu');
        });

    };


    var testimonialCarousel = function(){

        var owl = $('.owl-carousel-fullwidth');
        owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            smartSpeed: 800,
            autoHeight: true
        });

    };

    var tabs = function() {

        // Auto adjust height
        $('.tab-content-wrap').css('height', 0);
        var autoHeight = function() {

            setTimeout(function(){

                var tabContentWrap = $('.tab-content-wrap'),
                    tabHeight = $('.tab-nav').outerHeight(),
                    formActiveHeight = $('.tab-content.active').outerHeight(),
                    totalHeight = parseInt(tabHeight + formActiveHeight - 50);

                tabContentWrap.css('height', totalHeight );

                $(window).resize(function(){
                    var tabContentWrap = $('.tab-content-wrap'),
                        tabHeight = $('.tab-nav').outerHeight(),
                        formActiveHeight = $('.tab-content.active').outerHeight(),
                        totalHeight = parseInt(tabHeight + formActiveHeight - 50);

                    tabContentWrap.css('height', totalHeight );
                });

            }, 10);

        };

        autoHeight();


        // Click tab menu
        $('.tab-nav a').on('click', function(event){

            var $this = $(this),
                tab = $this.data('tab');

            $('.tab-content')
                .addClass('animated-fast fadeOutDown');

            $('.tab-nav li').removeClass('active');

            $this
                .closest('li')
                .addClass('active');

            $this
                .closest('.tabs')
                .find('.tab-content[data-tab-content="'+tab+'"]')
                .removeClass('animated-fast fadeOutDown')
                .addClass('animated-fast active fadeIn');


            autoHeight();
            event.preventDefault();

        });
    };



    $(function(){
        mobileMenuOutsideClick();
        offcanvasMenu();
        burgerMenu();
        contentWayPoint();
        dropdown();
        testimonialCarousel();
        tabs();

    });


}());