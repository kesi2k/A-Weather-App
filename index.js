$.getJSON('http://ipinfo.io', function(location) {

  var user_location = location.postal
  var city = location.city;
  var country = location.country;

  $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=" + user_location + ",us&units=imperial&appid=8427f46315fd69d43b3d303d70521dbf")
    .done(function(weather) {
      var tempF = Math.round(weather.main.temp)
      var tempC = Math.round((tempF - 32) * (5 / 9)) + "&degC"

      $("#user_weather").html(weather.weather[0].description + ", ")
      $("#user_temp").html(tempF + "&degF")
      $("#units_toggle").html(tempC)
      $("#user_location").html(city + ", "+ country);

      $("#weather_icon").attr("src", "http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png")
    })

  $(document).ready(function() {
    $("#units").on("click", function() {
      $("#user_temp").toggle();
      $("#units_toggle").toggle();
    })
  })

});