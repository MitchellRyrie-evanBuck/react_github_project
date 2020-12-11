// import './App.css';

import { Redirect, Route, Switch, Link } from "react-router-dom";
import React, { Component } from "react";

import "../../global.css";

import Home from "../../backstage/home/home";
import Header from "../../backstage/header/header"
import "../../App.css"

class User extends Component {
  render() {
    return (
      <div>
        <Header></Header>
 
      </div>
    );
  }
}

export default User;
