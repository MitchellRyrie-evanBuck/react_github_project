import React, { Component } from "react";
import "../../../App.css";
import "../../../global.css";
import { getcontent } from "../../../api/index";
import Check from "./check"

class AddLables extends Component {
  state = {
    // 拿到的整个数据
    data: [],
    list : {},
    category: [
      {
        name: "bug",
        color: "d73a4a",
        tags: [],
      },
      {
        name: "documentation",
        color: "0075ca",
        tags: [],
      },
      {
        name: "duplicate",
        color: "cfd3d7",
        tags: [],
      },
      {
        name: "enhancement",
        color: "a2eeef",
        tags: [],
      },
      {
        name: "good first issue",
        color: "7057ff",
        tags: [],
      },
      {
        name: "help wanted",
        color: "008672",
        tags: [],
      },
      {
        name: "invalid",
        color: "e4e669",
        tags: [],
      },
      {
        name: "question",
        color: "d876e3",
        tags: [],
      },
      {
        name: "wontfix",
        color: "ffffff",
        tags: [],
      },
    ],
  };

  async getdata() {
    let result = await getcontent();
    // console.log(result);
    let data = result;
    this.setState({
      data,
    });
  }
  componentDidMount() {
    this.getdata();
  }
  handleClick(e,item){
    let q =  document.querySelectorAll(".input")
    // console.log(q)
    q.forEach(item=>{
      item.checked = false
    })
    
    console.log(e.target.attributes[1].value)
    let a = document.getElementById(`${e.target.attributes[1].value}`)
    // console.log(a.checked)
    if(a.checked === true){
      // console.log("----------------------")
      a.checked = false
    }else{
      a.checked = true
    }

    // console.log(a,a.checked)

    // 如果没被选中就不进行传值
    if(a.checked){
      this.setState({
        list: item,
      });
    }

  }
  render() {
    const { data, list } = this.state;
    return (
      <div className="user_home">
        <div className="add_issues_center">
          {data.map((item, index) => {
            return (
              <div className="flag" key={item.number} onChange={(event)=>{this.handleClick(event,item)}}>
                <input
                  type="checkbox"
                  name={item.number}
                  value={item}
                  className="input"
                  id={item.number}
                  key={item.node_id}
                  ref={(input)=>{this.textInput=input}}
                />
                <div className="issues" key={index}>
                  {item.title}
                  {item.labels.map((item, index) => {
                    return (
                      <button
                        style={{ backgroundColor: "#" + item.color }}
                        className="tags_categorys_btn"
                        key={item.name}
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <Check list={list} ></Check>
        {/* 选中框 */}
      </div>
    );
  }
}

export default AddLables;
