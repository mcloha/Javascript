$(function() {
    
    function getColor() {
      return '#' + Math.random().toString(16).slice(2, 8);
    }
    
    function setBackground() {
      var bgColor = getColor();
      $('body').css('background', bgColor);
      var x = getColor();
      $('#color').text(x); 
    }
    
    $(window).keypress(function (e) {
      if (e.keyCode === 32) {
        setBackground();
      }
    });
    
    setBackground();
});
