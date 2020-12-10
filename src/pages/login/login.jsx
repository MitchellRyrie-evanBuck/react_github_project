import React, { Component } from "react";
// import "./login.less";
import { Redirect, Route, Switch ,Link} from 'react-router-dom'
class Login extends Component {
  render() {
    return (
      <div>
        <div className="container p-4">
          <div className="lneumorphic-card mx-auto">
            <label className="lneumorphic-label" htmlFor="login__input">
              Login
            </label>
            <input className="lneumorphic-input" id="login__input" type="text" />
            <label className="lneumorphic-label" htmlFor="password_input">
              Password
            </label>
            <input className="lneumorphic-input" id="password_input" type="text" />
            <button type="button" className="lbtn lneumorphic-btn">
            <Link
            style={{ textDecoration:'none'}}
          to={{
            pathname: "/user",
            
          }}
        > 
          Log in

        </Link>
            </button>
          
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
