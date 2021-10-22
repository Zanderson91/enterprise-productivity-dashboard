export async function getLongitudeAndLatitude(city) {
    const apiKey = "fcd4959547494e3926eb7576b9b31d6a";
    const requestUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;   
    const response = await fetch(requestUrl);
    const jsonData = await response.json();    
    const latitude = jsonData.coord.lat;
    const longitude = jsonData.coord.lon;
    return { latitude, longitude };
};