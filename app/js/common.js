$(function() {

    $('form').submit(function() {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
        }).done(function() {
            setTimeout(function() {
                th.trigger("reset");
            }, 1000);
            setTimeout(function() {
                window.location.href = "thanks.html";
            }, 2000);
        });
        return false;
    });


    // Fancybox

    $('[data-fancybox]').fancybox();


    // Scroll to section

    $("a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html, body').animate({ scrollTop: destination }, 1000)
        return false;
    });


});


// Mmenu

if($(window).width() <= 768){
    $(document).ready(function(){

        var $menu = $("#my-menu").mmenu({
            "offCanvas": {
                "position": "left"
            },
            navbar: {
                title: 'Меню'
            },
        });
        var $icon = $("#my-icon");
        var API = $menu.data( "mmenu" );
        var $a = $(".mm-listview a");

        $icon.on( "click", function() {
            API.open();
        });

        $a.on( "click", function() {
            API.close();
        });

        API.bind( "open:finish", function() {
            setTimeout(function() {
                $icon.addClass( "is-active" );
            }, 100);
            $('body').css('padding-top', '0')
        });
        API.bind( "close:finish", function() {
            setTimeout(function() {
                $icon.removeClass( "is-active" );
            }, 100);
        });

    });

};

