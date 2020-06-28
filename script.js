
var cityName = "austin"
var apiKey = "98e46e361787699b6e62a63c5142d5a0"
var todayAPI = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey;
var weatherData
$.ajax({
    url: todayAPI,
    method: "GET"
})

.then(function (response) {
    var latCity = "" + response.coord.lat;
    var lonCity = "" + response.coord.lon;
    console.log(lonCity);
    console.log(latCity);
    console.log(response);
    
    
    var fiveDayAPI = "https://api.openweathermap.org/data/2.5/onecall?lat="+latCity+"&lon="+lonCity+"&exclude=minutely,hourly&units=imperial&appid="+apiKey;

    console.log(fiveDayAPI);
    $.ajax({
        url: fiveDayAPI,
        method: "GET"
    })
    
    .then(function (response) {
        console.log(fiveDayAPI);
        console.log(response);
        weatherData = response;
    })
})

