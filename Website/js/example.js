// DOM Ready

$(window).bind("load", function() {
    magicline();
});

function magicline() {
    var $el, leftPos, newWidth;
        $mainNav = $("#example-one");
    
    //remove the old magic line before creating a new one.
    $("#magic-line").remove();
    /*
        EXAMPLE ONE
    */
    
    /* Add Magic Line markup via JavaScript, because it ain't gonna work without */
    $mainNav.append("<li id='magic-line'></li>");
    
    /* Cache it */
    var $magicLine = $("#magic-line");
    
    $magicLine
        .width($(".current_page_item").width())
        .css("left", $(".current_page_item a").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());
        
    $("#example-one li").find("a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });    
    });
    
    
    /*
    $("#example-one li").find("a").click(function() {
        var $el = $(this);

            $el.addClass('current_page_item').siblings().removeClass('current_page_item');
            $active = $el;
    });

    
        EXAMPLE TWO
    
    
    $mainNav2.append("<li id='magic-line-two'></li>");
    
    var $magicLineTwo = $("#magic-line-two");
    
    $magicLineTwo
        .width($(".current_page_item_two").width())
        .height($mainNav2.height())
        .css("left", $(".current_page_item_two a").position().left)
        .data("origLeft", $(".current_page_item_two a").position().left)
        .data("origWidth", $magicLineTwo.width())
        .data("origColor", $(".current_page_item_two a").attr("rel"));
                
    $("#example-two a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        $magicLineTwo.stop().animate({
            left: leftPos,
            width: newWidth,
            backgroundColor: $el.attr("rel")
        })
    }, function() {
        $magicLineTwo.stop().animate({
            left: $magicLineTwo.data("origLeft"),
            width: $magicLineTwo.data("origWidth"),
            backgroundColor: $magicLineTwo.data("origColor")
        });    
    });*/
    
    /* Kick IE into gear */
    //$(".current_page_item_two a").mouseenter();
    
}

$('li a').click(function() {
    $('li').each(function(){ 
       $(this).removeClass('current_page_item');               
    });
    $(this).parent().addClass('current_page_item');
    magicline();
});

/*
$(window).bind("load", function () {
    var $mainNav = $("#example-one"),
        $active = $mainNav.children('.current_page_item'),
        $magicLine = $("<li id='magic-line'></li>");

    $magicLine
        .width($active.width())
        .css("left", $active.position().left)
        .appendTo($mainNav);

    $mainNav.on('mouseenter mouseleave click', 'li:not(#example-one)', function (e) {
        var $el = e.type == 'mouseleave' ? $active : $(this);

        if (e.type == 'click') {
            $el.addClass('active').siblings().removeClass('active');
            $active = $el;
        } else {
            $magicLine.stop().animate({
                left: $el.position().left,
                width: $el.width()
            });
        }
    });
});*/

