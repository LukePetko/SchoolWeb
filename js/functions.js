$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  console.log(wScroll);


  if(wScroll < 600)
  {
    $("nav").css({
      "position" : "absolute",
      "background-color" : "white",
      "margin-top" : "10px",
      "padding-top" : "0px"
    });
  } else {
    $("nav").css({
      "background-color" : "white",
      "opacity" : "0.95",
      "position" : "fixed",
      "margin-top" : "-600px",
      "padding-top" : "10px"
    });
  }

  if(wScroll > 970 && wScroll < 3200) {
    $("body").css({
      "background-color" : "black",
      "color" : "white",
      "transition" : "all 0.5s ease-in-out"
    });

    $("nav").css({
      "background-color" : "black",
      "color" : "white"
    });

    $("nav a").css({
      "background-color" : "black",
      "color" : "white",
      "border-bottom" : "3px solid lightgray"
    });

    $("nav a").hover(function(){
      $(this).css({
        "background-color" : "white",
        "color" : "dimgray",
        "border-bottom" : "3px solid dimgray"
      });
    }, function(){
        $(this).css({
          "background-color" : "black",
          "color" : "white",
          "border-bottom" : "3px solid lightgray"
        });
    });

    $("h4:nth-of-type(2)").css("border-bottom", "2px solid white");
    $("h3").css("border-bottom", "2px solid white");


  } else {
    $("body").css({
      "background-color" : "white",
      "color" : "black",
      "transition" : "all 0.5s ease-in-out"
    });

    $("nav a").css({
      "background-color" : "white",
      "color" : "black",
      "border-bottom" : "3px solid black"
    });

    $("nav a").hover(function(){
      $(this).css({
        "background-color" : "black",
        "color" : "lightgray",
        "border-bottom" : "3px solid lightgray"
      });
    }, function(){
        $(this).css({
          "background-color" : "white",
          "color" : "black",
          "border-bottom" : "3px solid black"
        });
    });

    $("h4:nth-of-type(2)").css("border-bottom", "2px solid black");
    $("h3").css("border-bottom", "2px solid black");
  }
});

$(function(){

  $("header img").fadeOut(0).delay(250).fadeIn(2000);
  $("header h1").fadeOut(0).delay(250).fadeIn(2000);
  $("header h3").fadeOut(0).delay(250).fadeIn(2000);

});
