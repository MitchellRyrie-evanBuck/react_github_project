import React, { Component } from "react";
import { Redirect, Route, Switch, Link } from "react-router-dom";
import "../../App.css";
import Home from "../home/home";
import Secheader from "./sec_header"
import Seclables from "./sec_lables"
class Header extends Component {
  state = {
    // 拿到的整个数据
    flag: true,
  
  };
  handleClick(){
    let flag = true
    this.setState({
      flag
    });
  }
  handleClicks(){
    let flag = false
    this.setState({
      flag
    });
  }
  render() {
    const {flag} = this.state
    return (
      <div>
        <div className="user_header">
          {/* 后天管理系统 */}

          <div className="user_header_titile">
          <Link
            style={{ textDecoration:'none',color : "black"}}
            to={{
              pathname: "/user",
              state: {},
            }}
          >    <h2>后台管理</h2> </Link>
        
          </div>

          {/* 中间选择区域 */}
          <div className="user_header_center">
            {/* issues */}
            <div className="user_header_issues" onClick={this.handleClick.bind(this)}>issues</div>
            {/* labels */}
            <div className="user_header_lables" onClick={this.handleClicks.bind(this)}>lables</div>
          </div>
          <Link
            to={{
              pathname: "/admin",
              state: {
                // 页面跳转要传递的数据，如下
                // data1: {}，
                // data2: []
              },
            }}
          >
            <button type="button" className="btn  mt-5 mb-3">
              退出
            </button>
          </Link>
        </div>
        {/* 二级列表 */}
        {
          flag? <Secheader></Secheader> : <Seclables></Seclables>
        }
        <Home></Home>
        
      </div>
    );
  }
}

export default Header;
