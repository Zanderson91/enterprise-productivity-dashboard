import "./homepage.css";
import Card from "../../components/Card/card";
import Graph from "../../components/Graph/graph";
import { userData } from "../../components/testData";
import { MediaControlCard } from "../../components/musicCard/musicCard";
import { SubComponentsPickers } from "../../components/Calendar/calendar"
import { SolidGameCardDemo } from "../../components/GamingCard/gamingCard"
import { GrowIconButtonStyle } from "../../components/Social/socialIcons"
import { ArticleList } from "../../components/newscard/articlesList"
import Navbar from "../../components/Navbar/Navbar"
import  DefaultChatMsg  from "../../components/friends/friends";

export default function Homepage() {
  return (
    <div className="homepage">
      <Navbar />
      <Card />
      <Graph
        data={userData}
        title="A Live Look at your energy Usage!"
        grid
        dataKey="name"
      />
      <div className="rowContain">
        <SubComponentsPickers className="subComponent" />
        <SolidGameCardDemo className="game" />
      </div>
    </div>
  );
}
