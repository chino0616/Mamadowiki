$(document).ready(function(){
  $(".guiding-area").hover(function(){
    $(".scary-word").fadeIn(600);
  },
    function(){
    $(".scary-word").fadeOut(600);})
                           
  $(".guiding-area").hover(function(){
    $(".jumbotron").css("background-size", "110%");
  },
    function(){
    $(".jumbotron").css("background-size", "100%");})

});
