$('body').vegas({
  delay: 5000,
  timer: false,
  slides: [
    { src: "img/bg1.jpg" },
    { src: "img/bg2.jpg" }
  ],
  overlay: 'js/vegas/overlays/08.png'
});

$(function() {
  $('#content .idea u').click(function(){
    var $form = $('#content form');
    $form.fadeIn();
  });
});
