//http://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=b365295b12b5405924384911fc6d09ca


// const button = document.querySelector("#button")
// const status = document.querySelector("#status")
// const temperature = document.querySelector("temperature")

let weather = {
    "apikey":"b365295b12b5405924384911fc6d09ca",
    fetchWeather : function() {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=b365295b12b5405924384911fc6d09ca")
        .then((response)=> response.json()).then((data)=> this.displayweather(data))
    },

    displayweather : function(data) {
        const {name}= data;
        const {icon,description}= data.weather[0];
        const {temp,humidity}= data.main;
        const {feels_like} = data.main
        const {speed}= data.wind;
        const NewSpeed = Math.trunc(`${(speed*3.6)}`)
        const Newtemp = Math.trunc(`${(temp-273.15)}`)
        const NewrealFeel = Math.trunc(`${(feels_like-273.15)}`)
        const datea = new Date().toLocaleString()
        document.querySelector("#temperature").innerHTML=(`${(Newtemp)}°C`)
        document.querySelector("#Weather").innerHTML=description
        document.querySelector("#humidity").innerHTML = ("humidity : "+humidity + "%")
        document.querySelector("#wind").innerHTML = ("wind speed : "+ NewSpeed + "km/h")
        document.querySelector("#date").innerHTML = ("updated at : " + datea)
        document.querySelector("#icon").src ="https://openweathermap.org/img/wn/" + icon +".png"
        document.querySelector("#realFeel").innerHTML = ("real feel :" + NewrealFeel + "°C")
    }
};

weather.fetchWeather()

const back = ()=>{
    {window.history.back();}
}
