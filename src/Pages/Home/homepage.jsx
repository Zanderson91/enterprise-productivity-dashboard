import './homepage.css'
import Card from '../../components/Card/card'
import Graph from '../../components/Graph/graph'
import { userData } from '../../components/testData'

export default function Homepage() {
    return (
        <div className="homepage">
            <Card />
            <Graph data={userData} title="Testing Graph Functionality" grid dataKey="name"/>
        </div>
    )
}
