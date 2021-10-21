import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/Sidebar/sidebar";
import "./app.css";
import Homepage from "./Pages/Home/homepage";
import GmailSidebarItem from "./components/sidebarTest/sidebarTest";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Sidebar />
        <Homepage />
      </div>
    </div>
  );
}

export default App;
