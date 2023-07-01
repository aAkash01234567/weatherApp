const key = "794524c22aee6810cc71d0159b8ca742";
const url= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const sbox =document.querySelector(".searchbar input");
const sbtn =document.querySelector(".searchbar button");
const weather =document.querySelector('.weather');
async function weatherUpdate(c){
    const response= await fetch(url+ c + `&appid=${key}`);
    if(response.status==404){
        document.querySelector('.error').style.display= "block";
        document.querySelector('.box').style.display= "none";
    }
    else{ 
    let data = await response.json();
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.minTemp').innerHTML = Math.round(data.main.temp_min)+ "°C";
    document.querySelector('.maxTemp').innerHTML = Math.round(data.main.temp_max)+ "°C";
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity+ "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
    if(data.weather[0].main=="Clouds"){
        weather.src="cloud.png";
    }
    else if(data.weather[0].main=="Clouds"){
        weather.src="cloud.png";
    }
    else if(data.weather[0].main=="Clear"){
        weather.src="clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weather.src="rain.png";
    }
    else if(data.weather[0].main=="Mist"){
        weather.src="fog.png";
    }
    else if(data.weather[0].main=="Snow"){
        weather.src="snow.png";
    }
    document.querySelector('.box').style.display= "block";
    document.querySelector('.error').style.display= "none";
}
}

function searchWeather(){
    weatherUpdate(sbox.value);
}

