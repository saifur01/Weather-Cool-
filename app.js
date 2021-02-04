
document.getElementById('search-btn').addEventListener('click', function(){
    const locationSearch = document.getElementById('location-input').value;
    const locationAddress = document.getElementById('location-address');
    const weatherTemperature = document.getElementById('temperature');
    
    
    

    

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + locationSearch +'&appid=872485f8798de1abb82eb99aa41d877e')
    .then(Response => Response.json())
    .then(data =>{
        
            
     
        locationAddress.innerText = data.name // Location print
        let temperatureCelsius = Math.round(data.main.temp - 273.15) // Temperature print
        temperature.innerText = temperatureCelsius
        
        const weatherIcon = data.weather[0].icon
        const iconLink = "https://openweathermap.org/img/w/" + weatherIcon + ".png";
        document.getElementById("weather-icon").src = iconLink;
         
       
        
    })
})




