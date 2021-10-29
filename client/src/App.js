
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
import SignUp from "./Pages/Register/register";
import SignInSide from "./Pages/Login/login";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import  ToDoList from "./components/Card/ToDoCard/toDoList";
import { getBitcoinArticles } from "../src/api";




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
  getBitcoinArticles();
  return (
    <ApolloProvider client={client}>
      <Router>
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
              <Route path="/ToDoList">
                <ToDoList />
              </Route>
            </Switch>
            
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
