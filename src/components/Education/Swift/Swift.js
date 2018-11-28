import React, {Component} from 'react';
import Basic from './BasicSwift';
import Introduction from './IntroductionSwift';
import Advance from './AdvanceSwift';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
class Swift extends Component {
  render() { 
    return (
      <div  className="container">
          <Router>
            <div>
            <ul className="list-inline" >
              <li className="list-inline-item"><Link to="/introcuctionswift">Introduction</Link></li>
              <li className="list-inline-item"><Link to="/basicswift">Basic</Link></li>
              <li className="list-inline-item"><Link to="/advanceswift">Advance</Link></li>
            </ul>
            <Route exact path="/introcuctionswift" component={()=> < Introduction />} />
            <Route exact path="/basicswift" component={()=> <Basic />} />
            <Route exact path="/advanceswift" component={()=> <Advance />} />
            </div>
          </Router>
      </div>
      );
  }
}
 
export default  Swift;