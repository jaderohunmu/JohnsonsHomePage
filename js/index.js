$('.meal2_grp button').mouseover(function() {
    $('.meal2').css('background-image','url(./images/BackgroundProject1.jpg)');
  })

$('.meal2_grp button').mouseout(function() {
    $('.meal2').css('background-image','url(./images/background-project-1@1x.jpg)');
  })

  $('.meal3_grp button').mouseover(function() {
    $('.meal3').css('background-image','url(./images/Project2.jpg)');
    $('#text3').css('color','white');
  })

$('.meal3_grp button').mouseout(function() {
    $('.meal3').css('background-image','url(./images/Project2.png)');
    $('#text3').css('color','white');
  })

  $('.meal4_grp button').mouseover(function() {
    $('.meal4').css('background-image','url(./images/Bitmap2.png)');
    $('#text4').css('color','white');
    $('#animation').fadeIn();
  })

  $('.meal4_grp button').mouseout(function() {
    $('.meal4').css('background-image','url(./images/Bitmap.png)');
    $('#text4').css('color','white');
    $('#animation').fadeOut();
  })

  $(document).ready(function() {
    $('#animation').hide();
  })

  function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3000);

    $('.hamburger').click(function() {
      $('.meal3').css('background-image','url(./images/Project2.png)');
      $('#text3').css('color','white');
    })

    $(".Skills, .Work, .Passions").click(function(){
      $(this).css('color','yellow');
      $(this).find(".toggleContainer").toggleClass("active");
      $(this).siblings(".Skills").find(".toggleContainer").removeClass("active");
    });