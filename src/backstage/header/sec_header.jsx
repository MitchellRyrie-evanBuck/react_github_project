import React, { Component } from "react";
import { Redirect, Route, Switch, Link } from "react-router-dom";
import "../../App.css";
import Home from "../home/home";
class Secheader extends Component {
  state = {
    // 拿到的整个数据
    flag: true,
  };
  render() {
    return (
      <div className="sec_user_header">
        <div className="sec_user_header_center">
          <Link
            style={{ textDecoration:'none',color : "black"}}
            to={{
              pathname: "/user/issues/add",
              state: {},
            }}
          >
            <div className="add_issues sec_user_header_btn">添加issues</div>
          </Link>
          <Link   style={{ textDecoration:'none',color : "black"}}
            to={{
              pathname: "/user/issues/updata",
              state: {},
            }}
          >
            <div className="updata_issues sec_user_header_btn">修改issues</div>
          </Link>
          <Link   style={{ textDecoration:'none',color : "black"}}
            to={{
              pathname: "/user/issues/delete",
              state: {},
            }}
          >
            <div className="delete_issues sec_user_header_btn">删除issues</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Secheader;
