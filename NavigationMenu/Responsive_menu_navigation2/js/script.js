$("nav div").on('click', function(){
  $("ul").slideToggle();
  $("ul ul").css("display", "none");
});

$("ul li").on("click", function(){
  $("ul ul").slideUp();
  $(this).find("ul").slideToggle();
});

$(window).on("resize", function(){
  if($(window).width() > 568){
    $("ul").removeAttr("style");
  }
});
