
//Random Dog Generator

let img = document.querySelector("img");
let button1 = document.querySelector("#dogButton");

//preloads an image into card:
fetch("https://dog.ceo/api/breeds/image/random")
    .then(function(response)
    {
        return response.json()
    })
    .then(function(data) 
    {
        img.src = data.message;
    })

//generates new image with each click:
button1.addEventListener("click", function()
{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(function(response)
    {
        return response.json()
    })
    .then(function(data) 
    {
        img.src = data.message;
    })
})

//Weather App

let button2 = document.querySelector("#weatherButton");
let userInput = document.querySelector("#cityInput");
let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");
let desc = document.querySelector("#desc");
let city = document.querySelector("#city");

button2.addEventListener("click", function(event)
{
    event.preventDefault();
    let url = `https://goweather.herokuapp.com/weather/${userInput.value}`
    console.log(userInput.value);

    fetch(encodeURI(url))
    .then(function(response)
    {
        return response.json()
    })
    .then(function(data)
    {
        city.innerText = userInput.value;
        temp.innerText = data.temperature;
        wind.innerText = data.wind;
        desc.innerText = data.description;

        userInput.value = "";
    })
})

//stretch

//Random Cat Facts

let button3 = document.querySelector("#catButton")
let display = document.querySelector("#factDisplay");

//preloads fact:
fetch("https://meowfacts.herokuapp.com/")
    .then(function(response)
    {
        return response.json()
    })
    .then(function(data)
    {
        display.innerText = data.data;
    })

//new cat fact with each click:
button3.addEventListener("click", function()
{
    fetch("https://meowfacts.herokuapp.com/")
    .then(function(response)
    {
        return response.json()
    })
    .then(function(data)
    {
        display.innerText = data.data;
    })
})










