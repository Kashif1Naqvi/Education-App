import React,{Component} from 'react';
import './index.css';
class Contact extends Component {
  render(){
    return(
      <div className="container text-muted"  style={{marginTop:"80px"}} >
            <div id="wrapper">
                <section>
                   <img src="https://scontent.flhe3-1.fna.fbcdn.net/v/t1.0-9/15940528_373004099728938_7550667385047692076_n.jpg?_nc_cat=101&_nc_ht=scontent.flhe3-1.fna&oh=6791ae42485ca813f07a60f719751d98&oe=5CB04F9A" alt="Photograph of Kashif naqvi" className="profile-photo" />
                    <h3>About</h3>
                      <p>Hi, I'm Kashif! This is my design portfolio where I share all of my favroite work. When I'm not designing things, I enjoy exercising, playing video games, drinking good coffee, and more.</p>
                      <p>If you'd like to follow me on Twitter, my username is <a href="https://twitter.com/naqvishah582" target="blank">@Kashif</a>.</p>
              </section>
                <section>
                  <h3>General Information</h3>
                  <p>I am not currently looking for new design work, but I am available for speaking gigs and similar engagements. If you have any questions, please don't hesitate to contact me!</p>
                  <p>Please only use phone contact for urgent inquiries. Otherwise, Twitter and email are the best way to reach me.</p>
                </section>
                <section>
                  <h3>Contact Details</h3>
                  <ul className="contact-info">
                    <li className="phone"><a>923069861434</a></li>
                    <li className="mail"><a href="gmail.com" >naqvishah582@gmail.com</a></li>
                    <li className="twitter"><a href="https://twitter.com/naqvishah582">Kashif Naqvi</a></li>
                  </ul>
                </section>
            </div>
      </div>
    );
  }
}
export default Contact;