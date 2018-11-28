import React,{Component} from 'react';
class Footer extends Component{
  render(){
    return(
      <div  style={{marginTop:"80px"}} >
      
              <footer className="page-footer font-small cyan darken-3"  >

                  <div className="fluid-container">

                    <div className="row">

                      <div className="col-md-12 py-5">
                        <div className="mb-5 flex-center">
                          <a className="fb-ic" href="https://www.facebook.com/syedkashifnaqvi.naqvi" target="blank">
                            <i className="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                          </a>
                          <a className="tw-ic" href="https://twitter.com/naqvishah582" target="blank">
                            <i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                          </a>
                          <a className="gplus-ic" href="https://plus.google.com/u/1/110023098655171714161" target="blank">
                            <i className="fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                          </a>
                          <a className="li-ic" href="https://www.linkedin.com/feed/" target="blank">
                            <i className="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                          </a>
                        </div>
                      </div>
                  
                    </div>
                  
                  </div>
                  
                  <div className="footer-copyright text-center py-3">© 2018</div>
                  </footer>
          </div>
      );
  }
}
export default Footer;