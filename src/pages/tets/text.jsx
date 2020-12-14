import React, { Component } from "react";
import E from "wangeditor";
import "../../global.css";
import { markdown, getcommit ,sendcomment} from "../../api/index";

class Text extends Component {
  constructor(props) {
    super(props);
}
  state = {
    // 拿到的整个数据
    article: "",
    // 转换完之后的数据
    markdown_text: "",
    // 评论信息
    commemtInfo: [],
    editorContent : ""
  };

  async getcomment(number) {
    let result = await getcommit(number);
    console.log(result);
    this.setState({
      commemtInfo: result,
    });
  }
  async componentDidMount() {
    // 初始化实例编辑器
    const elemMenu = this.refs.editorElemMenu;
    const elemBody = this.refs.editorElemBody;
    const editor = new E(elemMenu,elemBody)
    editor.create()


    let text = this.props.location.state;
    // console.log(text.number)
    this.getcomment(text.number);
    let marktext = await markdown(text.body);
    // console.log(marktext)
    this.setState({
      article: text,
      markdown_text: marktext,
    });
  }
  async handleClick(number){
    let a =document.getElementsByClassName("w-e-text")[0]
    // console.log(a.innerHTML)
    // console.log(number)
    let aa = await sendcomment(number,a.innerHTML)
    console.log(aa)
    a.innerHTML = ""
  }
  render() {
    const { article, markdown_text, commemtInfo } = this.state;
    return (
      <div className="back">
        <div className="text_title">
          <h1>{article.title} </h1>
        </div>
        <div className="text_">
          <div
            className="text_content"
            dangerouslySetInnerHTML={{ __html: markdown_text }}
          />
        </div>

        {/* 评论信息 */}
        <div className="comment">
          <div className="comment_center">
            {commemtInfo.map((item, index) => {
              return (
                <div className="comment_user" key={index}>
                  <div className="user_img">
                    <img
                      src="https://s3.ax1x.com/2020/12/10/riFDX9.jpg"
                      alt=""
                      className="user_imgs"
                    />
                  </div>
                  <div className="comment_info">
                    {/* 用户信息 */}
                    <div className="comment_top">
                      {/* 用户名字 */}
                      <span>{item.user.login} </span>
                      {/* 创建时间 */}
                      <span>commented: </span>
                      <span> {item.created_at}</span>
                    </div>
                    {/* 用户评论内容 */}
                    <div className="comment_text"dangerouslySetInnerHTML={{ __html: item.body || "" }}>
                      {/* <p className="commemt_text_p"    dangerouslySetInnerHTML={{ __html: item.body || "" }}>{item.body}</p> */}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* 用户自行评论 */}
            <div className="users_commit">
              <div className="comment_write_comment_user">
                <div className="comment_write_user_img">
                  <img
                    src="https://s3.ax1x.com/2020/12/10/riFDX9.jpg"
                    alt=""
                    className="comment_write_user_imgs"
                  />
                </div>
                <div className=" comment_write">
                  {/* 用户信息 */}
                  <div className=" comment_write_top"></div>
                  {/* 用户评论内容 */}
                  <div className=" comment_write_text">
                    {/* 富文本编辑器 */}
                    <div
                      ref="editorElemMenu"
                      style={{
                        backgroundColor: "#f1f1f1",
                        border: "1px solid #ccc",
                        width:"630",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "620",
                        height: "100px",
                        border: "1px solid #ccc",
                        borderTop: "none",
                        zIndex: 20,
                      }}
                    
                      ref="editorElemBody"
                    >
                      
                    </div>
                      <button type="button" className="comment_btn "  onClick={()=>{this.handleClick(article.number)}}>comment</button>
                    
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Text;
