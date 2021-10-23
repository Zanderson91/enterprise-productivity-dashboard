import { useState, useEffect } from 'react';
import "../card.css";
import "./weatherCard.css";

import { getLongitudeAndLatitude, getWeatherStats } from "../../../utils/weatherAPI";

export default function WeatherCard() {

    const [input, setInput] = useState("");
    const [cityName, setCityName] = useState("");
    const [cityTemp, setCityTemp] = useState(0);
    const [cityWindSpeed, setCityWindSpeed] = useState(0);
    const [cityHumidity, setCityHumidity] = useState(0);
    const [weatherDescription, setWeatherDescription] = useState("");
    const [weatherIconUrl, setWeatherIconUrl] = useState("");
    const [cityUVI, setCityUVI] = useState("");
    const [uviIcon, setUviIcon] = useState("")
    const [status, setStatus] = useState("");

    useEffect(() => {
        if (cityName !== "") {
          console.log(cityName);
          const getWeatherData = async () => {
            try {
                const { latitude, longitude } = await getLongitudeAndLatitude(cityName);
                const { temp, windSpeed, humidity, uvi, description, icon } = await getWeatherStats(latitude, longitude);
                setCityTemp(temp);
                setCityWindSpeed(windSpeed);
                setCityHumidity(humidity);
                setCityUVI(uvi);
                setWeatherDescription(description);
                setWeatherIconUrl(`http://openweathermap.org/img/wn/${icon}.png`)
            }
            catch (error) {
                setStatus(error);
                console.log(error);
            }
          };
          getWeatherData();
          setStatus("");
          setInput("");
        }
    }, [cityName]);

    const handleChange = (event) => {
        const { value } = event.target;
        setInput(value);
      }
    
    const handleClick = () => { setCityName(input); }

    // function getUviIconLink(uvi) {
    //     const cityUvIndexEl = document.getElementById("city-uvIndex");
    //     if (uvi >= 0 && uvi < 3) {
    //         cityUvIndexEl.style.backgroundColor = "green";
    //         cityUvIndexEl.style.color = "white";
    //     }
    //     else if (uvi >= 3 && uvi < 6) {
    //         cityUvIndexEl.style.backgroundColor = "yellow";
    //         cityUvIndexEl.style.color = "black";
    //     }
    //     else if (uvi >= 6 && uvi < 8) {
    //         cityUvIndexEl.style.backgroundColor = "orange";
    //         cityUvIndexEl.style.color = "white";
    //     }
    //     else if (uvi >= 8 && uvi < 11) {
    //         cityUvIndexEl.style.backgroundColor = "red";
    //         cityUvIndexEl.style.color = "white";
    //     }
    //     else {
    //         cityUvIndexEl.style.backgroundColor = "violet";
    //         cityUvIndexEl.style.color = "white";
    //     }
    // }



    return (
        <div className="cardItem navBg">
            <span className="cardTitle">Current Weather: {cityName}</span>
            <div className="cardContainer">
                <div className="weatherContainer">
                    <div>
                        <ul>
                            <li className="weatherStats humidity">description: {weatherDescription}</li>
                            <li className="weatherStats temp">temp: {cityTemp}</li>
                            <li className="weatherStats windSpeed">wind speed: {cityWindSpeed} MPH</li>
                            <li className="weatherStats humidity">humidity: {cityHumidity} %</li> 
                            <li className="weatherStats uvi">uV index:
                                <span className="uviColor">{cityUVI}</span>                            
                            </li>                           
                        </ul>
                    </div>
                    <div>
                        {weatherIconUrl !== "" 
                        ?(
                            <img src={weatherIconUrl} alt="Weather Icon" />
                        ) 
                        :(
                            <p>NO IMAGE</p>
                        )}                 
                    </div>
                </div>
            </div>
            <input
                type="text"
                value={input}
                name="text"
                onChange={handleChange}
            />
            <button className="btn btn-primary"
                type="button"
                onClick={() => handleClick(input)}>Get Weather
            </button>

        </div>
    );
}
