export async function getLongitudeAndLatitude(city) {
    const apiKey = "fcd4959547494e3926eb7576b9b31d6a";
    const requestUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;   
    const response = await fetch(requestUrl);
    const jsonData = await response.json();    
    const latitude = jsonData.coord.lat;
    const longitude = jsonData.coord.lon;
    return { latitude, longitude };
};

export async function getWeatherStats (latitude, longitude) {
    const apiKey = "fcd4959547494e3926eb7576b9b31d6a";
    const requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=imperial&appid=${apiKey}`
    const response = await fetch(requestUrl);
    const jsonData = await response.json();
    const temp = jsonData.current.temp;
    const windSpeed = jsonData.current.wind_speed;                       
    const humidity = jsonData.current.humidity;
    const uvi = jsonData.current.uvi;
    const description = jsonData.current.weather[0].description;
    const icon = jsonData.current.weather[0].icon;            
    return { temp, windSpeed, humidity, uvi, description, icon };                      
};