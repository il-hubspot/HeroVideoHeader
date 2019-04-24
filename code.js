$(document).ready(function() {
    hsjQuery(".header-23-play").each(function(){
        var o  = $(this);
        var m = /wistia.com\/medias\/(.+)/.exec(o.attr("href"));
        if (m) {
            var id = m[1];
            o.attr("href", "//fast.wistia.net/embed/iframe/" + id + (id.indexOf("?") > -1 ? "&" : "?") + "autoPlay=true");
        }
    }).magnificPopup({
        "type": "iframe",
        mainClass: "header-23-popup"
    });
});


jQuery(document).ready(function($) {
    $(".header-23-v2").each(function() {
        var o = $(this);
        
        if (o.hasClass("init")) {
            return;
        }

        o.addClass("init");

        var headerId = "id-" + Math.random().toString().slice(2);
        o.attr("id", headerId);
      
        var style = "";

        o.find(".js-nav-styles").each(function(){
            var parentMenuColor = $( this ).data( 'nav-parent-color' );
            var parentMenuHoverColor = $( this ).data( 'nav-parent-hover-color' );
            var childMenuColor = $( this ).data( 'nav-child-color' );
            var childMenuHoverColor = $( this ).data( 'nav-child-hover-color' );
            var childMenuBgColor = $( this ).data( 'nav-child-bg' );
            
            var navId = "id-" + Math.random().toString().slice(2);
            $(this).attr("id", navId);

            style += "#" + navId + " ul > li > a { color: " + parentMenuColor + "; } \n";
            style += "#" + navId + " ul > li > a:hover, #" + navId + " ul > li > a:focus, #" + navId + " ul > li > a:active { color: " + parentMenuHoverColor + "; } \n";
            style += "#" + navId + " ul > li > .hs-menu-children-wrapper li a { color: " + childMenuColor + "; } \n";
            style += "#" + navId + " ul > li > .hs-menu-children-wrapper li a:hover, #" + navId + " ul > li > .hs-menu-children-wrapper li a:focus, #" + navId + " ul > li > .hs-menu-children-wrapper li a:active { color: " + childMenuHoverColor + "; } \n";
            style += "#" + navId + " ul > li > .hs-menu-children-wrapper { background-color: " + childMenuBgColor + "; } \n";
            style += "#" + headerId + " .navbar-toggle .icon-bar { background-color: " + parentMenuColor + "; } \n";
        });

        $("<style type='text/css'/>").html(style).appendTo("head");
    });
});
