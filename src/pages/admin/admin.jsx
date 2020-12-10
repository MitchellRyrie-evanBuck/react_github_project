import React, { Component } from 'react'
// import { Redirect, Route, Switch } from 'react-router-dom'
import "../../global.css"
import Header from "../header/header"
import Home from "../home/home"
class Admin extends Component{

  render(){
    return(
      // <div>amdin</div>
      <div style={{height: '100%',width: '100%',backgroundColor: 'lightblue'}}>
        <Header></Header>
        <Home></Home>
      </div>
    )
  }
}
export default Admin