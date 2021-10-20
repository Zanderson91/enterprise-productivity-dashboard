import Navbar from './components/navbar/Navbar'
import { Button } from "@material-ui/core";
import Header from "./components/Header/header";

function App() {
    return (
        <div className="App">
            <Header/>
        <Button> Press me </Button>
        <Navbar />
      </div>
    );
}

export default App;