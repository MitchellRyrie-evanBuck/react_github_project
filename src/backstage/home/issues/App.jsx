import React, { Component } from 'react';
import WangEditors from 'wangeditor';

export default class WangEditor extends Component {
    state={editorContent:{}}
    componentDidMount() {
        const { value, onChange} = this.props;
        const editor = new WangEditors(this.node);
        editor.customConfig.onchange = html => {
            // 传递html editor.txt.html()
            onChange(html);// 当编辑器内容改变时
            this.setState({
                editorContent: editor.txt.html() // 存到state里面
            });
        };
        editor.customConfig.uploadImgShowBase64 = true; // 图片base64
        editor.create();
        // 设置初始内容
        editor.txt.html(value);
    }
    render() {
        const { editorContent } = this.state; // 把值传给父组件
        return (
            <div>
                <div onClick={()=>{this.props.getData(editorContent);}} ref={node => this.node = node} />
            </div>
        );
    }
}
