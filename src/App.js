// import './App.css';
import {
  HashRouter,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import React, { Component } from "react";

import "./global.css";
import Admin from "./pages/admin/admin";
// import Test from "./pages/tets/test";
import User from "./pages/user/user";
import Login from "./pages/login/login" 
import Text from "./pages/tets/text";
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Redirect to="/admin"></Redirect>
        </Route>
        <Route
          path="/admin"
          render={() => {
            return <Admin></Admin>;
          }}
          
        />
      
        <Route
          path="/login"
          render={() => {
            return <Login></Login>;
          }}
        />
        <Route
          path="/user"
          render={() => {
            return <User></User>;
          }}
        />
        <Route
          path="/content/"
          // exact="true"
          component={Text}
          // render={() => {
          //   return <Text></Text>;
          // }}
        />

        
        <Redirect to="/"></Redirect>
      </Switch>
    );
  }
}

export default withRouter(App);
