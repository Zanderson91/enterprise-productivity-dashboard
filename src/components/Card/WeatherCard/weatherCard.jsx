import { useState, useEffect } from 'react';
import "../card.css";

import { getLongitudeAndLatitude, getWeatherStats } from "../../../utils/weatherAPI";

export default function WeatherCard() {

    const [input, setInput] = useState("");
    const [cityName, setCityName] = useState("");
    const [cityTemp, setCityTemp] = useState(0);
    const [cityWindSpeed, setCityWindSpeed] = useState(0);
    const [cityHumidity, setCityHumidity] = useState(0);
    const [status, setStatus] = useState("");

    useEffect(() => {
        if (cityName !== "") {
          console.log(cityName);
          const getWeatherData = async () => {
            try {
                const { latitude, longitude } = await getLongitudeAndLatitude(cityName);
                const { temp, windSpeed, humidity } = await getWeatherStats(latitude, longitude);
                setCityTemp(temp);
                setCityWindSpeed(windSpeed);
                setCityHumidity(humidity);
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



    return (
        <div className="cardItem">
            <span className="cardTitle">Current Weather: {cityName}</span>
            <div className="cardContainer">
                <div className="weatherinfo1">{cityTemp}</div>
                <div className="weatherinfo1">{cityWindSpeed}</div>
                <div className="weatherinfo1">{cityHumidity}</div>
            </div>
            <input
                type="text"
                value={input}
                name="text"
                onChange={handleChange}
            />
            <button className="btn btn-primary"
                type="button"
                onClick={() => handleClick(input)}>Click This
            </button>

        </div>
    );
}
