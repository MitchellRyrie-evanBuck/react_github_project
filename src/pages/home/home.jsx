import React, { Component } from "react";
// import { Redirect, Route, Switch } from 'react-router-dom'
import { Link } from "react-router-dom";
import "../../global.css";
import { getcontent ,getTags} from "../../api/index";
import Test from "../tets/test";
class Home extends Component {
  // constructor(props) {
  //   super(props)
  // }
  state = {
    // 拿到的文章
    article: [],
    // 分类列表
    category: [
      {
        name: "bug",
        color : "d73a4a",
        tags: [],
      },
      {
        name: "documentation",
        color : "0075ca",
        tags: [],
      },
      {
        name: "duplicate",
        color : "cfd3d7",
        tags: [],
      },
      {
        name: "enhancement",
        color : "a2eeef",
        tags: [],
      },
      {
        name: "good first issue",
        color : "7057ff",
        tags: [],
      },
      {
        name: "help wanted",
        color : "008672",
        tags: [],
      },
      {
        name: "invalid",
        color : "e4e669",
        tags: [],
      },
      {
        name: "question",
        color : "d876e3",
        tags: [],
      },
      {
        name: "wontfix",
        color : "ffffff",
        tags: [],
      },
    ],
  };
  constructor () {
    super()
    
  }
  getarticle = async () => {
    const result = await getcontent();
    console.log(result);
    let articles = result;
    this.setState({
      article: articles,
    });
  };
  componentDidMount() {
    this.getarticle();
  }
  
  handleClick(){
    this.getarticle();
  }
  async handlebutton(event){
    let text = event.target.innerHTML
    let result = await getTags(text)
    let articles = result;
    this.setState({
      article: articles,
    });
  }
  render() {
    const { article ,category} = this.state;
    return (
      <div
        className="home"
        style={{
          height: "2500px",
          width: "100%",
          backgroundColor: "rgb(240, 240, 240,0.9)",
        }}
      >
        {/* 分类页面 */}
        <div className="categorys">
            <button type="button" className="categorys_btn lbtn" onClick={this.handleClick.bind(this)}>
              全部
            </button>
            {category.map((item ,index)=>{
              return  <button style={{backgroundColor:"#"+item.color}} type="button" className="categorys_btn lbtn" key={index} onClick={this.handlebutton.bind(this)}>
                {item.name}
            </button>
            })}
          </div>
        <div className="content_center">
          

          {/* 内容区域 */}
          <div className="content">
            {article.map((item) => {
              // console.log(item)
              return <Test categorys={item} key={item.id}></Test>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
