import React, {Component} from 'react';
import Basic from './BasicMl';
import Introduction from './IntroductionMl';
import Advance from './AdvanceMl';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
class MachineLearning extends Component {
  render() { 
    return (
      <div  className="container">
          <Router>
            <div>
            <ul className="list-inline" >
              <li className="list-inline-item"><Link to="/introcuctionMachineLearning">Introduction</Link></li>
              <li className="list-inline-item"><Link to="/basicsMachineLearning">Basic</Link></li>
              <li className="list-inline-item"><Link to="/advanceMachineLearning">Advance</Link></li>
            </ul>
            <Route exact path="/introcuctionMachineLearning" component={()=> < Introduction />} />
            <Route exact path="/basicsMachineLearning" component={()=> <Basic />} />
            <Route exact path="/advanceMachineLearning" component={()=> <Advance />} />
            </div>
          </Router>
      </div>
      );
  }
}
 
export default  MachineLearning;