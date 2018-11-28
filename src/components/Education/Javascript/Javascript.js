import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Introduction from './Introduction';
import Basic from './Basic';
import Advance from './Advance';
class Javascript extends Component {
  render() { 
    return (
      <Router>
        <div  className="container">
          <nav>
            <ul className="list-inline" >
              <li className="list-inline-item"><Link to="/introJavascript">Introduction</Link></li>
              <li className="list-inline-item"><Link to="/basicJavascript">Basic</Link></li>
              <li className="list-inline-item"><Link to="/advanceJavascript">Advance</Link></li>
            </ul>
          </nav>
          <Route exact path="/introJavascript" component={()=><Introduction />} />
          <Route exact path="/basicJavascript" component={()=><Basic />} />
          <Route exact path="/advanceJavascript" component={()=><Advance />} />
        </div>
      </Router>
    );
  }
}
 
export default Javascript;