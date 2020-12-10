import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import "../../global.css"

import User from "../user/user"
class Header extends Component{

  render(){
    return(
      <div className="header">
        <div className="header_center">
          <div className="Blog">
            <h2>Blog</h2>
          </div>
          <div className="neumorphic-card mx-auto">
            <input className="neumorphic-input" id="login__input" type="text" placeholder="搜索"/>
          </div>
          <button type="button" className="btn neumorphic-btn mt-5">seach</button>
        </div>
        <div className="">
        <button type="button" className="btn  mt-5 mb-3">
        <Link
        style={{ textDecoration:'none'}}
          to={{
            pathname: "/login",
            
          }}
        > 
          后台

        </Link>
        </button>
        </div>
      </div>
    )
  }
}
export default Header