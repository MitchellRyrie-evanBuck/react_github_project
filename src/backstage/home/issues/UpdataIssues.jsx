import React, { Component } from "react";
import "../../../App.css"
import "../../../global.css";
import { getcontent } from "../../../api/index";
import { Link } from "react-router-dom";
class UpdataIssues extends Component{
  state = {
    data: [],
  }
  async getdata() {
    let result = await getcontent();
    console.log(result);
    let data = result;
    this.setState({
      data,
    });
  }
 componentDidMount() {
    this.getdata();
  }
  render(){
    const { data } = this.state;
    return(
      <div className="user_home">
        <div className="add_issues_center">
        {data.map((item, index) => {
            return (
              <Link
              style={{ textDecoration:'none',color : "black"}}
              to={{
                pathname: `/user/issues/updata/${item.number}`,
                state: item
              }}
              key={index}
            >
              <div className="flag" key={item.number}>
                <div className="issues" key={index}>
                  {item.title}
                  {item.labels.map((item, index) => {
                    return (
                      <button
                        style={{ backgroundColor: "#" + item.color }}
                        className="tags_categorys_btn"
                        key={index}
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </div>
              </div>
              </Link>
            );
          })}
        </div>
      </div>
    )
  }
}

export default UpdataIssues