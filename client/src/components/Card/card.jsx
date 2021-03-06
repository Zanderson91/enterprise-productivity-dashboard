import "./card.css";
import WeatherCard from "./WeatherCard/weatherCard";
import ToDoList from "./ToDoCard/toDoList";
import { MediaControlCard } from "../musicCard/musicCard";
import { GrowIconButtonStyle } from "../../components/Social/socialIcons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Card() {
  return (
    <Router>
      <div className="card flexbox">
        <WeatherCard className="left"/>
        <ToDoList className="center" />
        <div class="music right">
          <MediaControlCard />
          <GrowIconButtonStyle />
        </div>
      </div>
    </Router>
  );
}
