import "./card.css";
import WeatherCard from "./WeatherCard/weatherCard";

export default function Card() {
  return (
    <div className="card">
      <WeatherCard />
      <div className="cardItem">
        <span className="cardTitle"> Test Card 2</span>
        <div className="cardContainer">
          <span className="info1"> Information Here</span>
        </div>
        <span className="bodyText"> Information about stuff..</span>
      </div>
      <div className="cardItem">
        <span className="cardTitle"> Test Card 3</span>
        <div className="cardContainer">
          <span className="info1"> Information Here</span>
        </div>
        <span className="bodyText"> Information about stuff..</span>
      </div>
    </div>
  );
}
