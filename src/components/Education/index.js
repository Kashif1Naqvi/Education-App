import React,{Component} from 'react';
import {BrowserRouter as Router , Route,Link } from 'react-router-dom';
import Javascript from './Javascript/Javascript';
import Swift from './Swift/Swift';
import DataSciece  from './DataScience/DataScience';
import BigData from './BigData/BigData';
import Ai from './AI/Ai';
import MachineLearning from './Ml/MachineLearning';
import * as routes from '../../constants/routes';

class Education extends Component {
render() { 
    return (
        <Router>
            <div  className="container">
                <nav className="container-fluid" style={{marginTop:"80px"}}>
                    <div className="row" >
                    <div className="col-sm-4" >
                             <Link to="/javascript"> 
                                 <img src="https://cdn-images-1.medium.com/max/2000/1*Rxzsy_E2MgxPP5oVmh1Q_g.jpeg" width="300px" height="200px" title="Javascript"  alt="Data Type" />
                             </Link>
                        </div>
                    <div className="col-sm-4" >
                          <Link to="/swift">
                            <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/108412460/original/56a0c212b8b1fe5d7af83cf5432de6c6330ceb32/develop-ios-application-for-you-in-swift-4.png" title="Swift" alt="Swift" width="300px" height="200px"/>
                          </Link>
                        </div>
                    <div className="col-sm-4" >
                            <Link to="/datascience">
                                <img src="http://www.prosearch.com/wp-content/uploads/2018/03/Post6-1.jpg" width="300px" height="200px" title="Data Science" alt="Data Science"/>
                            </Link>
                        </div>
                    <div className="col-sm-4" >
                         <Link to="/bigData">
                            <img src="https://zdnet3.cbsistatic.com/hub/i/r/2018/01/01/00a8ffa1-ff8e-49c6-9a3c-44e622af1824/resize/770xauto/24b0310cdf6050ae4318ea623afb07c4/big-data-pix.jpg" title="Big Data" width="300px" height="200px" alt=""/>
                         </Link>
                        </div>
                    <div className="col-sm-4" >
                          <Link to="/ai">
                            <img src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/07/Philips-AI-796x531.jpg" width="300px" height="200px" title="Artificail Inteligence" alt="Ai"/>
                          </Link>
                        </div>
                    <div className="col-sm-4" >
                            <Link to="/machine">
                                <img src="https://cdn-images-1.medium.com/max/1200/1*M9le42saJxWlOYyYvhKtPA.jpeg" width="300px" height="200px" alt=""/>
                            </Link>
                        </div>
                    </div>
                </nav><hr />
                <Route exact path={routes.JAVASCRIPT} component={()=><Javascript />} />
                <Route exact path={routes.SWIFT} component={()=><Swift />}/>
                <Route exact path={routes.DATA_SCIENCE} component={()=> <DataSciece />}/>
                <Route exact path={routes.BIG_DATA} component={()=> <BigData />}/>
                <Route exact path={routes.ARTIFICIAL_INTELIGENCE} component={()=> <Ai />}/>
                <Route exact path={routes.MACHINE_LEARNING} component={()=><MachineLearning />}/>
            </div>
        </Router>
        
    );
  }
}
 
export default Education;