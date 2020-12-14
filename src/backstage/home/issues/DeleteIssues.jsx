import React, { Component } from "react";
import "../../../App.css"
import "../../../global.css";
import { getcontent,deleteissues } from "../../../api/index";
class DeleteIssues extends Component{
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
  async handleClick(number){
    let a = await deleteissues(number)
    // console.log(a)
    this.getdata()
  }
  render(){
    const { data } = this.state;
    return(
      <div className="user_home">
        <div className="add_issues_center">
        {data.map((item, index) => {
            return (
            
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
                    <button
                    className="tags_categorys_btn_delete"
                  
                    onClick={()=>{this.handleClick(item.number)}}
                      >
                        close
                      </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
  }
}

export default DeleteIssues