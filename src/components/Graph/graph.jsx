import "./graph.css";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
} from "recharts";

export default function Graph() {
  const data = [
    {
      name: "Value 1",
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: "Value 2",
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: "Value 3",
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: "Value 4",
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: "Value 5",
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: "Value 6",
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];

    return (
        <div className="graph">
            <div className="graphDataTitle">Testing Graph Functionality</div>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <ComposedChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="amt"
                fill="#e76f51"
                stroke="#264653"
              />
              <Bar dataKey="pv" barSize={20} fill="#264653" />
              <Line type="monotone" dataKey="uv" stroke="#2a9d8f" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
