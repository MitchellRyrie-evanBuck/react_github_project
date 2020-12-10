// import './App.css';

import { Redirect, Route, Switch, Link } from "react-router-dom";
import React, { Component } from "react";

import "../../global.css";
import LeftNav from "../../backstage/leftNav/leftNav";
import Home from "../../backstage/home/home";
import Header from "../../backstage/header/header"
// import "../../App.less"

class User extends Component {
  render() {
    return (
      <div>
        

        {/* <Link
          to={{
            pathname: "/admin",
            state: {
              // 页面跳转要传递的数据，如下
              // data1: {}，
              // data2: []
            },
          }}
        >
      <button type="button" className="btn  mt-5 mb-3">退出</button>
        </Link> */}
      </div>
    );
  }
}

export default User;
