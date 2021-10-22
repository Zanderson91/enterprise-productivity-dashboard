import './homepage.css'
import Card from '../../components/Card/card'
import Graph from '../../components/Graph/graph'
import { userData } from '../../components/testData'
import { MediaControlCard } from '../../components/testcard/testcard'

export default function Homepage() {
    return (
        <div className="homepage">
            <Card />
        <MediaControlCard />
        <Graph
          data={userData}
          title="Utilizing Props to change title!"
          grid
          dataKey="name"
        />
      </div>
    );
}
