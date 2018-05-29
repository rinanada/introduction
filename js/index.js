$(function(){
  if($(window).width()<=940){
    $('.nav').hide();
  }
})
$('.glyphicon-align-right').click(function(){
  $('.nav').toggle();
});
