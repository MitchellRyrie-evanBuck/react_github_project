import React, { Component } from 'react';

class CKEditor extends Component {
    constructor(props) {
        super(props);
        this.elementName = "editor_" + props.id;

        this.state = {
          init: false
        }
    }

    componentDidMount(){
// 当该组件用于创建模块时，需要渲染editor（条件：我之前从没初始化过）
      if (this.props.content === '' && this.props.id && this.state.init === false) {
        this.loadCkEditor(this.props);
      }
    }

// 每次更新都会走进该周期，我需要判断有没有初始化过 && 外部有传进内容
// 当没有init===false的判断，会导致页面渲染多个编辑器，我头开始的解决方案不是用init作为标记，而是使用ckeditor的destory 、delete等方法，发现实现起来都不太干净，且有问题
    componentWillReceiveProps(nextProps) {

      if (CKEDITOR && nextProps && nextProps.content && nextProps.id  && this.state.init === false) {
        this.loadCkEditor(nextProps);
      }
    }

    loadCkEditor = (nextProps) => {
      this.elementName = "editor_" + this.props.id;

      CKEDITOR.replace(this.elementName);
      const { onChange } = nextProps;

      CKEDITOR.instances[this.elementName].on("change", function () {
        onChange && onChange(CKEDITOR.instances[this.elementName].getData())
      }.bind(this));

      this.setState({
        init: true
      })
    }

    render() {
      return (
        <textarea ref="content1" name={this.elementName} value={this.props.content ? this.props.content : ''}></textarea>
      )
    }
}

export default CKEditor
