import React, { Component } from "react";
import E from "wangeditor";
import "../../global.css";
import { markdown, getcommit } from "../../api/index";

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
    // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
    // editor.customConfig.onchange = html => {
    //     console.log(editor.txt.html())
    //     this.setState({
    //         // editorContent: editor.txt.text()
    //         editorContent: editor.txt.html()
    //     })
    // }
    // editor.customConfig.menus = [
    //     'head',  // 标题
    //     'bold',  // 粗体
    //     'fontSize',  // 字号
    //     'fontName',  // 字体
    //     'italic',  // 斜体
    //     'underline',  // 下划线
    //     'strikeThrough',  // 删除线
    //     'foreColor',  // 文字颜色
    //     'backColor',  // 背景颜色
    //     'link',  // 插入链接
    //     'list',  // 列表
    //     'justify',  // 对齐方式
    //     'quote',  // 引用
    //     'emoticon',  // 表情
    //     'image',  // 插入图片
    //     'table',  // 表格
    //     'video',  // 插入视频
    //     'code',  // 插入代码
    //     'undo',  // 撤销
    //     'redo'  // 重复
    // ]
    // editor.customConfig.uploadImgShowBase64 = true;
    // editor.customConfig.uploadImgHeight = 'auto';
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
                    <div className="comment_text">
                      <p className="commemt_text_p">{item.body}</p>
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
                      {/* 初始化富文本 (可直接为空什么也不写)*/}              
                        <div></div>
                    </div>
                      <button type="button" className="comment_btn ">comment</button>
                    
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
