import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import Contact from '../Contact/Contact.js';
import Footer from '../Footer/Footer';
import withAuthentication from '../Session/withAuthentication';
import * as routes from '../../constants/routes';
// javascript import components Routers start
// import '../../dist/css/bootstrap-grid.min.css';
import IntroductionJs from '../Education/Javascript/Introduction'
import BasicJs from '../Education/Javascript/Basic';
import AdvanceJs from '../Education/Javascript/Advance';

// javascript import components Routers End


// Swift import components Routers start

import BasicSw from '../Education/Swift/BasicSwift';
import IntroductionSw from '../Education/Swift/IntroductionSwift';
import AdvanceSw from '../Education/Swift/AdvanceSwift';

// Swift import components Routers End

// DataSciece import components Routers START

import IntroductionDs from '../Education/DataScience/IntroductionDs';
import BasicDs from '../Education/DataScience/BasicDs';
import AdvanceDs from '../Education/DataScience/AdvanceDs';

// DataSciece import components Routers End

// import BigData component start

import IntroductionBg from '../Education/BigData/IntroductionBg';
import BasicBg from '../Education/BigData/BasicBg';
import AdvanceBg from '../Education/BigData/AdvanceBg';

// import BigData component start


// import Ai component start

import IntroductionAi from '../Education/AI/IntroductionAi';
import BasicAi from '../Education/AI/BasicAi';
import AdvanceAi from '../Education/AI/AdvanceAi';

// import Ai component End

// import MachineLearning start
import IntroductionMl from '../Education/Ml/IntroductionMl';
import BasicMl from '../Education/Ml/BasicMl';
import AdvanceMl from '../Education/Ml/AdvanceMl'

import './index.css';

const App = () =>
  <Router>
    <div className="container-fluid"  >
      <Navigation />
      <hr/>
      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.EDUCATION} component={Education}  />
      <Route exact path={routes.CONTACT} component={() => <Contact /> } />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
      <Route exact path={routes.FOOTER}  component={()=> <Footer />} />
      <hr/>
      <Footer />
    </div>
  </Router>
const Education =({match}) =>{
  return (
      <Router>
          <div  className="container">
              <nav className="container-fluid" style={{marginTop:"80px"}}>
                  <div className="row" >
                      <div className="col-sm-4"  style={{paddingBottom:"10px",paddingBlockStart:"1px"}} >
                          <Link to={`${match.url}/javascript`} className="hovereffect" > 
                            <img src="https://cdn-images-1.medium.com/max/2000/1*Rxzsy_E2MgxPP5oVmh1Q_g.jpeg" width="300px" height="200px" title="Javascript"  alt="Javascript" />
                          </Link>
                      </div>
                  <div className="col-sm-4"  style={{paddingBottom:"10px",paddingBlockStart:"1px"}}  >
                      <Link to={`${match.url}/swift`} className="hovereffect">
                        <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/108412460/original/56a0c212b8b1fe5d7af83cf5432de6c6330ceb32/develop-ios-application-for-you-in-swift-4.png" title="Swift" alt="Swift" width="300px" height="200px"/>
                      </Link>
                  </div>
                  <div className="col-sm-4"   style={{paddingBottom:"10px",paddingBlockStart:"1px"}} >
                    <Link to={`${match.url}/datascience`} className="hovereffect">
                      <img src="http://www.prosearch.com/wp-content/uploads/2018/03/Post6-1.jpg" width="300px" height="200px" title="Data Science" alt="Data Science"/>
                    </Link>
                  </div>
                  <div className="col-sm-4"  style={{paddingBottom:"10px",paddingBlockStart:"1px"}} >
                    <Link to={`${match.url}/bigData` } className="hovereffect">
                      <img src="https://zdnet3.cbsistatic.com/hub/i/r/2018/01/01/00a8ffa1-ff8e-49c6-9a3c-44e622af1824/resize/770xauto/24b0310cdf6050ae4318ea623afb07c4/big-data-pix.jpg" title="Big Data" width="300px" height="200px" alt="Big Data"/>
                    </Link>
                  </div>
                  <div className="col-sm-4"  style={{paddingBottom:"10px",paddingBlockStart:"1px"}} >
                    <Link to={`${match.url}/ai`} className="hovereffect"> 
                      <img src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/07/Philips-AI-796x531.jpg" width="300px" height="200px" title="Artificail Inteligence" alt="Ai"/>
                    </Link>
                  </div>
                  <div className="col-sm-4"  >
                    <Link to={`${match.url}/machine`} className="hovereffect">
                      <img src="https://cdn-images-1.medium.com/max/1200/1*M9le42saJxWlOYyYvhKtPA.jpeg" width="300px" height="200px" alt="machine learning"/>
                    </Link>
                  </div>
                </div>
              </nav><hr />
              <Route  path={`${match.url}/javascript`} component={Javascript}/>
              <Route  path={`${match.url}/swift`} component={Swift}/>
              <Route  path={`${match.url}/datascience`} component={DataSciece}/>
              <Route  path={`${match.url}/bigData`} component={BigData} />
              <Route  path={`${match.url}/ai`} component={Ai}/>
              <Route  path={`${match.url}/machine`} component={MachineLearning}/>
          </div>
      </Router>
  );
}
//  javascript Routers start
                const Javascript = ({match}) =>{
                  return (
                    <Router>
                      <div  className="container">
                        <nav> 
                          <ul className="list" >
                            <li className="list-item" ><Link to={`${match.url}/introJavascript`} >Introduction</Link></li>
                            <li className="list-item"><Link to={`${match.url}/basicJavascript`}>Basic</Link></li>
                            <li className="list-item"><Link to={`${match.url}/advanceJavascript`}>Advance</Link></li>
                          </ul>
                        </nav>
                        <Route exact path={`${match.url}/introJavascript`} component={() => <IntroductionJs />} />
                        <Route exact path={`${match.url}/basicJavascript`} component={() =><BasicJs />} />
                        <Route exact path={`${match.url}/advanceJavascript`} component={() =><AdvanceJs />} />
                      </div>
                    </Router>
                  );
                }
                //  javascript Routers End

                // swift Routers Start
                const Swift = ({match}) =>  {
                    return (
                      <div  className="container">
                        <Router>
                          <div>
                            <ul className="list" >
                              <li className="list-item"><Link to={`${match.url}/introcuctionswift`}>Introduction</Link></li>
                              <li className="list-item"><Link to={`${match.url}/basicswift`}>Basic</Link></li>
                              <li className="list-item"><Link to={`${match.url}/advanceswift`}>Advance</Link></li>
                            </ul>
                            <Route exact path={`${match.url}/introcuctionswift`} component={()=> <IntroductionSw />} />
                            <Route exact path={`${match.url}/basicswift`}        component={()=> <BasicSw />} />
                            <Route exact path={`${match.url}/advanceswift`}      component={()=> <AdvanceSw />} />
                      </div>
                        </Router>
                      </div>
                      );
                  }
                //  swift Routers End

                // data science routes start 

                const DataSciece = ({match}) =>  {
                  return (
                    <div  className="container">
                        <Router>
                          <div>
                          <ul className="list" >
                            <li className="list-item"><Link to={`${match.url}/introcuctionDs`}>Introduction</Link></li>
                            <li className="list-item"><Link to={`${match.url}/basicsDs`}>Basic</Link></li>
                            <li className="list-item"><Link to={`${match.url}/AdvanceDs`}>Advance</Link></li>
                          </ul>
                          <Route exact path={`${match.url}/introcuctionDs`} component={()=> <IntroductionDs />} />
                          <Route exact path={`${match.url}/basicsDs`}        component={()=> <BasicDs />} />
                          <Route exact path={`${match.url}/AdvanceDs`}      component={()=> <AdvanceDs />} />
                      
                          </div>
                        </Router>
                    </div>
                    );
                }
                // data science routes end
                // Big data Route start 
                const BigData = ({match}) => { 
                    return (
                      <div  className="container">
                        <Router>
                          <div>
                            <ul className="list" >
                              <li className="list-item"><Link to={`${match.url}/introcuctionBigData`}>Introduction</Link></li>
                              <li className="list-item"><Link to={`${match.url}/basicBigData`}>Basic</Link></li>
                              <li className="list-item"><Link to={`${match.url}/advanceBigData`}>Advance</Link></li>
                            </ul>
                            <Route exact path={`${match.url}/introcuctionBigData`} component={()=> < IntroductionBg />} />
                            <Route exact path={`${match.url}/basicBigData`}         component={()=> <BasicBg />} />
                            <Route exact path={`${match.url}/advanceBigData`} component={()=> <AdvanceBg />} />
                          </div>
                        </Router>
                      </div>
                      );
                }
                
                // big data routes end

                // Artificail Inteligence Route Start
                const Ai = ({match}) => {
                  return(
                  <div  className="container">
                    <Router>
                      <div>
                        <ul className="list" >
                            <li className="list-item"><Link to={`${match.url}/ArtificailInteligenceIntro`}>Introduction</Link></li>
                            <li className="list-item"><Link to={`${match.url}/ArtificailInteligenceBasic`}>Basic</Link></li>
                            <li className="list-item"><Link to={`${match.url}/ArtificailInteligenceAdvance`}>Advance</Link></li>
                        </ul>
                        <Route exact path={`${match.url}/ArtificailInteligenceIntro`} component={() =><IntroductionAi />} />
                        <Route exact path={`${match.url}/ArtificailInteligenceBasic`} component={()=> <BasicAi />} />
                        <Route exact path={`${match.url}/ArtificailInteligenceAdvance`} component={()=> <AdvanceAi />} />
                      </div>
                    </Router>
                    </div>
                  )
                }

                // Artificail Inteligence Route End

                // machine learning component start
                const MachineLearning = ({match}) =>{
                return (
                  <div  className="container">
                    <Router>
                      <div>
                        <ul className="list" >
                          <li className="list-item"><Link to={`${match.url}/introcuctionMl`}>Introduction</Link></li>
                          <li className="list-item"><Link to={`${match.url}/basicsMl`}>Basic</Link></li>
                          <li className="list-item"><Link to={`${match.url}/advanceMl`}>Advance</Link></li>
                        </ul>
                        <Route exact path={`${match.url}/introcuctionMl`} component={()=> <IntroductionMl />} />
                        <Route exact path={`${match.url}/basicsMl`}       component={()=> <BasicMl />} />
                        <Route exact path={`${match.url}/advanceMl`}      component={()=> <AdvanceMl />} />
                      </div>  
                    </Router>
                  </div>
                  );
                }
                // machine leaning component End

export default withAuthentication(App);
