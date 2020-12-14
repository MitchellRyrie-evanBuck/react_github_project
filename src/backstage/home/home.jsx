import React, { Component } from "react";
import "../../App.css"
import { Redirect, Route, Switch, Link } from "react-router-dom";
import Homes from "./homes"
import AddIssues from "./issues/AddIssues"
import UpdataIssues from "./issues/UpdataIssues"
import DeleteIssues from "./issues/DeleteIssues"

import AddLables from "./lables/AddLables"
import UpdataLables from "./lables/UpdataLables"
import Updata from "./issues/updata"
import DeleteLables from "./lables/DeleteLables"
class Home extends Component{

  render(){
    return(
        
        <Switch>
          <Route exact path="/user" component={Homes}>
          </Route>
          <Route exact path="/user/issues/add" component={AddIssues}>
          </Route>
          <Route exact path="/user/issues/updata" component={UpdataIssues}>
          </Route>
           <Route  path="/user/issues/updata/" component={Updata}>
          </Route>
          <Route exact path="/user/issues/delete" component={DeleteIssues}>
          </Route>
          <Route exact path="/user/issues/updata/" component={Updata}>
          </Route>
          <Route exact path="/user/lables/add" component={AddLables}>
          </Route>
          <Route exact path="/user/lables/updata" component={UpdataLables}>
          </Route>
        
          <Route exact path="/user/lables/delete" component={DeleteLables}>
          </Route>
        
        </Switch>
    
    )
  }
}

export default Home