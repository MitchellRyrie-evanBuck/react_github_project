import React, { useState, useEffect } from "react";

import "../../../global.css";
import "../../../App.css";
import { markdown,updataissues } from "../../../api/index";
import E from "wangeditor";
let editor = null;
export default function Updata(props) {
  let text = props.location.state;

  const [article, setArticle] = useState("");
  const [markdown_text, setMarkdown_text] = useState("");

  useEffect(() => {
    editor = new E("#div1");
    editor.config.focus = false
    editor.create();
    return () => {
      // 组件销毁时销毁编辑器  注：class写法需要在componentWillUnmount中调用
      editor.destroy();
    };
  }, []);

  useEffect(() => {
    markdown(text.body).then((res) => {
      setArticle(text);
      setMarkdown_text(res);
    });
  }, [props]);

  function handleClick() {
    console.log("-----");
    let a = document.getElementsByClassName("cont")[0]
    console.log(a.innerHTML)
    console.log(article.title)
    console.log(article.number)
    // 第一位是编辑数字number  第二位是 title  第三位是body 
    let aaa = {
      number : article.number,
      title : article.title,
      body : a.innerHTML
    }
    // updataissues(aaa).then((res)=>{
    //   console.log(res)
    // })
  }

  return (
    <div className="user_home">
      <div className="add_issues_center">
        <h3>{article.title}</h3>
        <div className="updata_issues_title">
          {/* <input
              className="updata_issues_title_input"
              type="text"
              // placeholder={article.title}
              ref={(input) => (this.refs = input)}
              value={article.title || ""}
              readOnly={true}
            /> */}
        </div>
        <h2>内容</h2>
        {/* 内容 */}
        <div className="updata_issues_content">
          <div id="div1">
            <div>
            <div className="cont"
              dangerouslySetInnerHTML={{ __html: markdown_text || "" }}
            ></div>
            </div>
          </div>
        </div>
        {/* 确定按钮 */}
        <button
          type="button"
          className="comment_btn_issues"
          onClick={handleClick}
        >
          comment
        </button>
      </div>
    </div>
  );
}
// }

// export default Updata;
