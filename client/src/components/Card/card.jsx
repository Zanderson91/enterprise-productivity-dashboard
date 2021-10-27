import "./card.css";
import WeatherCard from "./WeatherCard/weatherCard";
import ToDoList from "./ToDoCard/toDoList";
import { MediaControlCard } from "../musicCard/musicCard";
import { GrowIconButtonStyle } from "../../components/Social/socialIcons";

export default function Card() {
  return (
    <div className="card">
      <WeatherCard />
      <ToDoList />
      <div class="music">
        <MediaControlCard />
        <GrowIconButtonStyle />
      </div>
    </div>
  );
}
