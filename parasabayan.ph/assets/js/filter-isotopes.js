$(document).ready(function() {
  
  $('span:contains("all")').addClass('active');
  
  $('span:contains("all")').click(function() {
  $('span:not(:contains("all"))').removeClass('active');
    $(this).addClass('active');
    $('.tab').show(500)
  });

  $('span:contains("web design")').click(function() {
    $('span:not(:contains("Web Design"))').removeClass('active');
    $(this).addClass('active');
    $('.tab:contains("Web Design")').show(500);
    $('.tab:not(:contains("Web Design"))').hide(500);

  });

  $('span:contains("app design")').click(function() {
    $('span:not(:contains("app Design"))').removeClass('active');
    $(this).addClass('active');
    $('.tab:contains("App Design")').show(500);
    $('.tab:not(:contains("App Design"))').hide(500);
  });

  $('span:contains("icons")').click(function() {
    $('span:not(:contains("icons"))').removeClass('active');
    $(this).addClass('active');
    $('.tab:contains("icons")').show(500);
    $('.tab:not(:contains("icons"))').hide(500);
  });

});
