

let temp=document.getElementById('temp');
let city_name1=document.getElementById('city_name');
let city_search = document.getElementById("city_Search");
let city_search_button = document.getElementById("search");
let humid = document.getElementById("humidity");
let windspeed = document.getElementById("wind_speed");
let mid_img = document.getElementById("sun");





const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '63d2cdc967msh8633f49fe6e06d3p1d1ed7jsn6b8ed02f81cb',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


function getweather(city1){
    
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city1}`, options)
    .then(response=>response.json())

    .then((response)=>{
        console.log(response)
        console.log(response.temp);
        if (response.temp !== undefined) {
            city_name1.innerHTML=city1;
            temp.innerText = response.temp + "°C";
            humid.innerText = response.humidity + "%";
            windspeed.innerText = response.wind_speed + "km/h";

            let  apiResponse = {
                sunrise:response.sunrise,
                sunset: response.sunset,
              };
              
              
              const currentTimestamp = Math.floor(Date.now() / 1000);
              
              
              const sunriseDate = new Date(apiResponse.sunrise * 1000);
              const sunsetDate = new Date(apiResponse.sunset * 1000);
              
          
              if (currentTimestamp > apiResponse.sunset || currentTimestamp < apiResponse.sunrise) {
                console.log("Night"); // It is currently night
                mid_img.innerHTML= '<img src="moon2.png"/>'

              } else if (currentTimestamp > apiResponse.sunrise && currentTimestamp < apiResponse.sunset) {
                console.log("Day"); // It is currently day
                mid_img.innerHTML= '<img src="sun.png"/>'
              } else if (currentTimestamp === apiResponse.sunrise) {
                console.log("Sunrise"); // It is currently sunrise
                mid_img.innerHTML= '<img src="sundownup.png"/>'
              } else if (currentTimestamp === apiResponse.sunset) {
                console.log("Sunset"); // It is currently sunset
                mid_img.innerHTML= '<img src="sundownup.png"/>'
              } else {
                console.log("Unknown"); // Unable to determine the time
              }



        } else {
            city_name1.innerHTML="--no such place found";
            temp.innerText = "- - °C";
            humid.innerText = "- - %";
            windspeed.innerText = "- - km/h";
        }
    })

.catch(err=>console.error(err))
}

 city_search_button.addEventListener("click",(e)=>{
     getweather(city_search.value);
 })
getweather("new york")
let element = document.getElementById("box");
let color=0;
setInterval(()=>{
    if(color==0){
        color+=1
        element.style.border = "2px solid red";

    }
    else{
        color=0;
        element.style.border = "2px solid blue";

    }
},1000)