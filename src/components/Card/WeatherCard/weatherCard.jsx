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
    
    return (
        <div className="cardItem">

        </div>
    );
}
