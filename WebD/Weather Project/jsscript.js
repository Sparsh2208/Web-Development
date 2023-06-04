const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '50843d5768mshc33320d691bbd68p133919jsnf4dd1bc2766b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather =(city) =>{
	cityname.innerHTML= city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response =>response.json())
	.then(response =>{ 
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));
}

const getweatherpune =(Pune) =>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune', options)
	.then(response =>response.json())
	.then(response =>{ 
		console.log(response)
		cloud_pct3.innerHTML = response.cloud_pct
		temp3.innerHTML = response.temp
		feels_like3.innerHTML = response.feels_like
		humidity3.innerHTML = response.humidity
		min_temp3.innerHTML = response.min_temp
		max_temp3.innerHTML = response.max_temp
		wind_speed3.innerHTML = response.wind_speed
		wind_degrees3.innerHTML = response.wind_degrees
		sunrise3.innerHTML = response.sunrise
		sunset3.innerHTML = response.sunset
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getweather(city.value)

})
home.addEventListener("click",(e)=>{
	e.preventDefault()
	getweather("Hubli")

})
abt.addEventListener('click', inputMsg);
  function inputMsg() {
      let name = alert('This Weather App is a mobile application that provides users with information about the current weather conditions and forecasts for a specific location. The app may use data from weather stations, satellite imagery, and other sources to provide real-time updates and accurate predictions for temperature, precipitation, wind speed and direction, humidity, and other weather variables. Users can typically customize the app to display information for their current location or for a specific location of their choice.');
  
  }

getweather("Hubli")