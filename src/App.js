import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/Sidebar/sidebar";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="something" />
      </div>
    </div>
  );
}

export default App;
