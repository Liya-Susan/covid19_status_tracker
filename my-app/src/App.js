import React,{Component} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import India from './Components/India';
import World from './Components/World';
import{
  BrowserRouter as Router ,
  Link,
  Switch,
  Route
} from 'react-router-dom';

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className ="container-fluid">
        
        <Router>
          <Header/>
          <Switch>
               <Route exact path="/" >
                  <India/>
               </Route>
               <Route path="/india" >
                  <India/>
                </Route>
               <Route path="/world" >
               
                  <World/>
               </Route>
          </Switch>
              
          
        </Router>
      </div>
        
      
    )
  }
}
export default App;
