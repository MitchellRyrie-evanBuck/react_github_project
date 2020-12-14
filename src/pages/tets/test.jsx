import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../global.css";
import { getcontent } from "../../api/index";
import PropTypes from "prop-types";

class Test extends Component {
  static propTypes = {
    // 总数据
    categorys: PropTypes.object.isRequired,
  };

  render() {
    const categorys = this.props;
    // console.log(categorys);
    return (
      <div className="issues" key={categorys.categorys.id}>
        <div>
          <Link
            style={{ textDecoration:'none',color : "black"}}
            to={{
              pathname: `/content/${categorys.categorys.number}`,
              // params:{foo: 'foo', boo:'boo'}, 
              state: categorys.categorys 
            }}
          >
            {categorys.categorys.title}
            {
              categorys.categorys.labels.map((item,index)=>{
              return <button style={{backgroundColor:"#"+item.color}} className="tags_categorys_btn" key={item.id}>{item.name}</button>
              })
            }
          </Link>
        </div>
      </div>
    );
  }
}

export default Test;
