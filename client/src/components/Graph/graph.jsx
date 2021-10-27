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
} from "recharts";

export default function Graph({ title, data, dataKey, grid }) {
  return (
    <div className="graph">
      <div className="graphDataTitle">{title}</div>
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
            {grid && <CartesianGrid stroke="#f5f5f5" />}
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
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
