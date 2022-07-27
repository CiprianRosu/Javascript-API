let weather = {
    "apiKey": "202d6a6a831941b7723a12b4195f9ba1",
    fetchWeather: function() {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Vaslui&appid=202d6a6a831941b7723a12b4195f9ba1")
        .then((response) =>  response.json())
        .then((data)=> console.log(data));
    },
};