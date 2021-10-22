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

        </div>
    );
}
