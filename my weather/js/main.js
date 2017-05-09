$(function weather(){
    
  var location = $('#location');
  var apiKey = 'f536d4c3330c0a1391370d1443cee848';
  var url = 'https://api.forecast.io/forecast/';

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    $('#location').html('Latitude is ' + latitude + '° <br> Longitude is ' + longitude + '°');

     $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?units=si&callback=?", function(data) {
      $('#temp').html(data.currently.temperature + '° C');
      $('#hourly').html(data.hourly.summary);
         
      if(hourly.innerHTML.slice(0,5)=='Clear')
          {
            $('#img').css("backgroundImage","url('img/clear.svg')");   /*IF CLEAR*/
          }
         
      if(hourly.innerHTML.slice(0,10)=='Light rain')
          {
            $('#img').css("backgroundImage","url('img/lrain.svg')");   /*IF Light Rain*/
          }
         
      if(hourly.innerHTML.slice(0,4)=='Snow')
          {
            $('#img').css("backgroundImage","url('img/snow.png')");   /*IF Snow*/
          }
         
    });
  }

  function error() {
     $('#location').html("Unable to retrieve your location");
  }

   $('#location').html("Locating...");

});
