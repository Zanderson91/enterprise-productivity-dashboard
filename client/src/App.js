import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/sidebar";
import "./app.css";
import Homepage from "./Pages/Home/homepage";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Sidebar from "./components/Sidebar1/Sidebar1";
import SignUp from "./Pages/Register/register";
import SignInSide from "./Pages/Login/login";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import BurgerIcon from "./components/Sidebar/sidebar"


const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        
        <div className="App">
          <div className="container">
            <Switch>
              <Route exact path="/">
                
                <Homepage />
              </Route>
              <Route path="/register">
                <SignUp />
              </Route>
              <Route path="/login">
                <SignInSide />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
