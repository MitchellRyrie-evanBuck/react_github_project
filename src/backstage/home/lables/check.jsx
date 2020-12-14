import React, { Component } from "react";
import "../../../App.css";
import "../../../global.css";
import PropTypes from "prop-types";
import {addIssueLabels} from "../../../api/index"
class Check extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.list,
      data: [],
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
      flag : false,
      currentdata : {}
    };
  }

  static propTypes = {
    // 总数据
    list: PropTypes.object.isRequired,
  };
  
  static getDerivedStateFromProps(nextProps,prevState){
    new Check(nextProps).test(nextProps)
    return {
      list : nextProps.list
    }
  }
  test(nextProps){
    console.log(nextProps)
    // this.setState({
    //   currentdata : nextProps.list
    // })
  }
  // componentDidMount(){
  //   console.log(this.props.someThings)
  // }
  componentDidUpdate(){
    // this.props.list.number

    let arr =  this.props.list.labels //得到传来的label数组
    // console.log(arr)
    // for(let i =0 ; i<arr.length;i++){
    //   let b = document.getElementsByClassName(`${i.name}`)[0]
    //   b.checked = true
    // }
    
    let q =  document.querySelectorAll(".put")
    q.forEach(item=>{
      item.checked = false
    })
    if(arr !== undefined){
      arr.forEach(item => {
        let b = document.getElementById(`${item.name}`)
        b.checked = true
      });
    }

  }
  handleClick(event,item){
    // console.log(item)
    // console.log(event.target.attributes[1].value)
    // let a = event.target.attributes[1].value
    // let asd = document.getElementById(`${a}`)
    // console.log(asd.checked)
  }
  async handle(number){
    let aLi = document.getElementsByClassName("put")
    // console.log(aLi)
    var arr = [];
    for (var i = 0; i < aLi.length; i++) {
        arr[arr.length] = aLi[i]
    }
    let asdf = []
    arr.forEach((item,index)=>{
      // console.log(item.value)
      if(item.checked){
        asdf.push(item.value)
      }
    })
    console.log(number)
    console.log(asdf)

    let mn = await addIssueLabels(number,{"labels":asdf})
    console.log(mn)
  }
  render(){
    let {category,list,currentdata} = this.state
    let number = this.props.list.number
    console.log(number)
    return (
      
      <div>
      <div className="check">
          <div className="check_center">
            {category.map((item, index) => {
              return (
                <div key={index} className="check_container">
                  <input
                    type="checkbox"
                    name={item.name}
                    value={item.name}
                    id={item.name}
                    className="put"
                    // key={index}
                    // checked={flag}
                    readOnly={true}
                    onChange={(event)=>{this.handleClick(event,item)}}
                  />
                  <button
                    style={{ backgroundColor: "#" + item.color }}
                    className="check_categorys_btn"
                    // key={index}
                  >
                    {item.name}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* 确定按钮 */}
        <div className="queding" onClick={()=>{this.handle(number)}}>确定</div>
      </div>
    )
  }


}
export default Check