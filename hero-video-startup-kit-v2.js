/**
 * JavaScript code for all ui-kit components.
 * Use namespaces.
 */

//preload images
$.fn.preload=function(){this.each(function(){$("<img/>")[0].src=this})}

window.startupKit = window.startupKit || {};


/**
 *  Headers 
 * */
startupKit.uiKitHeader = startupKit.uiKitHeader || {};


/* Header 23*/
startupKit.uiKitHeader.header23 = function() {

    startupKit.attachBgVideo();

    $('body').prepend($('.mask, .popup-video').not('pre .mask, pre .popup-video'));
    $('.header-23 .mask, .header-23 .popup-video').not('pre .mask, pre .popup-video').detach();

    var iframe = $('#pPlayer')[0];
    var player = $(iframe);

    $('#play').on('click', function(evt) {
        evt.preventDefault();
        $('.popup-video').addClass('shown');
        $('.popup-video, .mask').fadeIn('slow', function() {
            player.api('play')
        });
        $('.mask').on('click', function() {
            player.api('pause');
            $('.popup-video, .mask').fadeOut('slow', function() {
                $('.popup-video').removeClass('shown');
            });
        });
    });
};

/* Video background  */
startupKit.attachBgVideo = function() {
    var videBgDiv = $('#bgVideo');
    if (!isMobile.any() && videBgDiv) {
        var videobackground = new $.backgroundVideo(videBgDiv, {
            "holder": "#bgVideo",
            "align" : "centerXY",
            "path" : "video/",
            "width": 854,
            "height": 480,
            "filename" : "preview",
            "types" : ["mp4", "ogg", "webm"]
        });
    }
}

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


/** 
 * Global part of startup-kit
 * */
(function($) {
    (function() {
        /* implementing headers */
        for (header in startupKit.uiKitHeader) {
            headerNumber = header.slice(6);
            if (jQuery('.header-' + headerNumber).length != 0) {
                startupKit.uiKitHeader[header]();
            };
        }
    
        /* function on load */
        $(window).on("load", function() {
            $('html').addClass('loaded');
            $(window).resize();
        });
        setTimeout(function() {
            $(window).resize();
        }, 10);

        /* ie fix images */
        if (/msie/i.test(navigator.userAgent)) {
            $('img').each(function() {
                $(this).css({
                    width : $(this).attr('width') + 'px',
                    height : 'auto'
                });
            });
        }
        
    })();
})(jQuery);