import React, { Component } from "react";
import "../../../App.css";
import "../../../global.css";
import { getcontent ,createissues} from "../../../api/index";
import App from "./Appp"
import E from "wangeditor";

class AddIssues extends Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    // 初始化实例编辑器
    // const elemMenu = this.refs.editorElemMenu;
    // const elemBody = this.refs.editorElemBody;
    // const editor = new E(elemMenu, elemBody);
    // editor.config.focus = false
    // editor.config.uploadImgServer = '/upload-img'
    // editor.config.uploadImgMaxSize = 2 * 1024 * 1024 // 2M
    // editor.config.uploadImgMaxLength = 5 // 一次最多上传 5 个图片
    // editor.config.uploadImgParams = {
    //   token: 'ed2a005a80557968760480a3ca6a833bac29dd28',
    //   x: 100
    // }


    // editor.create();

  }
  async handleClick() {
    // let a = document.getElementById("div1")
    // console.log(a)
    let editor = new E("#div1")
    console.log(editor)
    console.log(editor.txt.html())
    console.log(editor.txt.text())

    
    let a = document.getElementsByClassName("w-e-text")[0]
    console.log(a.innerHTML)

    this.name = this.refs.value
    const title = this.name
    const body = a.innerHTML
    console.log("this.name:" + this.name)  

    let result =  await createissues({title,body})
    console.log(result)
  }
  handleChange(data){
    console.log(data)

  }
  render() {

    return (
      <div className="user_home">
        <div className="add_issues_center">
          {/* 标题 */}
          <h3>标题</h3>
          <div className="updata_issues_title">
            <input
              className="updata_issues_title_input"
              type="text"
              placeholder="输入标题"
              ref={(input) => this.refs = input}
            />
          </div>
          <h2>内容</h2>
          {/* 内容 */}
          <div className="updata_issues_content">
            {/* <div
              ref="editorElemMenu"
              style={{
                backgroundColor: "#f1f1f1",
                border: "1px solid #ccc",
                width: "630",
              }}
            ></div>
            <div
              style={{
                width: "620",
                height: "250px",
                border: "1px solid #ccc",
                borderTop: "none",
                zIndex: 20,
              }}
              className="wang_editor"
              ref="editorElemBody"
              onChange={(event)=>{this.handleClick(event)}}
            >
            
            </div> */}
            <App></App>
            {/* <WangEditor></WangEditor> */}
          </div>
          {/* 确定按钮 */}
          <button
            type="button"
            className="comment_btn_issues"
            onClick={
              this.handleClick.bind(this)
            }
          >
            comment
          </button>
        </div>
      </div>
    );
  }
}

export default AddIssues;
