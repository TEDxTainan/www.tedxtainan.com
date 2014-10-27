jQuery(document).ready(function(){
    jQuery(".member-photo").click(function(){
          var breif = jQuery(this).parent(".team-member");
             jQuery(".member-breif").show();
             jQuery(breif).siblings(".member-breif").hide();
             jQuery(".team-member").css({"width":"220px","height":"260px","background":"white"})
             jQuery(".intro").css("display","none");
             jQuery(".s-wrraper").css( {"zIndex":"1","height":"300px"});

             jQuery(this).parent(".team-member").animate({ width: "640px" }, { duration: 1000, queue: false }).animate({ height: "700px" }, 1500);
             jQuery(this).parent(".team-member").css( {"background":"black","zIndex":6});
             jQuery(this).parents(".s-wrraper").css( {"zIndex":"8","height":"300px"});
             jQuery(this).siblings(".intro").css("display","block");
    });
    jQuery(".close-intro").click(function(){
             var breif = jQuery(this).parents(".team-member");
             jQuery(breif).siblings(".member-breif").show();
             jQuery(this).parents(".team-member").animate({ width: "220px" }, { duration: 0, queue: false }).animate({ height: "260px" }, 0);
             jQuery(this).parents(".team-member").css( "background","white");
             jQuery(this).parent(".intro").css("display","none");
             jQuery(".s-wrraper").css( {"zIndex":"1","height":"300px"});
    });
});
