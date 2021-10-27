import "./card.css";
import WeatherCard from "./WeatherCard/weatherCard";
import ToDoList from "./ToDoCard/toDoList";
import { MediaControlCard } from "../musicCard/musicCard";

export default function Card() {
  return (
    <div className="card">
      <WeatherCard />
      <ToDoList />
      <div class="music">
        <MediaControlCard />
      </div>
    </div>
  );
}
