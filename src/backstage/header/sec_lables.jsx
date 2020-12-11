import React, { Component } from "react";
import { Redirect, Route, Switch, Link } from "react-router-dom";
import "../../App.css";
import Home from "../home/home";
class Seclables extends Component {
  state = {
    // 拿到的整个数据
    flag: true,
  };
  render() {
    return (
      <div className="sec_user_header">
        <div className="sec_user_header_center">
        <Link   style={{ textDecoration:'none',color : "black"}}
            to={{
              pathname: "/user/lables/add",
              state: {},
            }}
          >
          <div className="add_issues sec_user_header_btn">添加lables</div>
          </Link>

          <Link  style={{ textDecoration:'none',color : "black"}}
            to={{
              pathname: "/user/lables/updata",
              state: {},
            }}
          >
    <div className="updata_issues sec_user_header_btn">修改lables</div>
          </Link>

          <Link  style={{ textDecoration:'none',color : "black"}}
            to={{
              pathname: "/user/lables/delete",
              state: {},
            }}
          >
                 <div className="delete_issues sec_user_header_btn">删除lables</div>
          </Link>


          
          

        </div>
      </div>
    );
  }
}

export default Seclables;
