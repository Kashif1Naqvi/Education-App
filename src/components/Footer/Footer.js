import React,{Component} from 'react';
import './css/style.css';
class Footer extends Component{
  render(){
    return(
      <div  className="text-muted">
      <section className="footer footer_w3layouts_section_1its py-md-5">
	<div className="container py-5">
		<div className="row footer-top">
			<div className="col-lg-3 footer-grid_section_1its_w3">
				<div className="footer-title">
					<h3>About Us</h3>
				</div>
				<div className="footer-text">
					<p>This website is made for professional learner students who are interested to learn programming languages 
						and also like diffrent programs and diffrent peoples psychology.</p>
					<ul className="social_section_1info">
						<li><a  href="https://www.facebook.com/syedkashifnaqvi.naqvi" target="blank"><i className="fa fa-facebook "></i></a></li>
						<li><a  href="https://twitter.com/naqvishah582" target="blank"><i className="fa fa-twitter"></i></a></li>
						<li><a  href="https://plus.google.com/u/1/110023098655171714161" target="blank"><i className="fa fa-google-plus"></i></a></li>
						<li><a  href="https://www.linkedin.com/feed/" target="blank"><i className="fa fa-linkedin"></i></a></li>
					</ul>
				</div>
			</div>
			<div className="col-lg-3 footer-grid_section_1its_w3">
				<div className="footer-title">
					<h3>Contact Info</h3>
				</div>
				<div className="contact-info">
					<h4>Location :</h4>
					<p> Pakistan ,Lahore City.</p>
					<div className="phone">
						<h4>Phone :</h4>
						<p>Phone : +92 3069861434</p>
						<p>Email : <a href="gmail.com">naqvishah582@gmail.com</a></p>
					</div>
				</div>
			</div>
			<div className="col-lg-2 footer-grid_section_1its_w3">
				<div className="footer-title">
					<h3>Useful Links</h3>
				</div>
				<ul className="links">
					<li><a target="blank" href="https://swift.org/">Swift</a></li>
					<li><a target="blank" href="https://getsmarter.mit.edu/mit-artificial-intelligence-online-short-course-lf/?&ef_id=c:258644973528_d:c_n:g_ti:kwd-426581919069_p:_k:%2Bmit%20%2Bmachine%20%2Blearning_m:b_a:50789349982&gclid=Cj0KCQiAxNnfBRDwARIsAJlH29D_CZ3hUeRHA2frZZLEmqRjiaHcCRFqG8fWEA6V8maEzPCEMRI123waAs2XEALw_wcB">Machine learning</a></li>
					<li><a target="blank" href="Introduction to Computational Thinking and Data Science | Electrical Engineering and Computer Science | MIT OpenCourseWare">Data Science</a></li>
					<li><a target="blank" href="http://news.mit.edu/topic/big-data">Big Data</a></li>
				</ul>
			</div>
			<div className="col-lg-4 footer-grid_section_1its_w3">
				<div className="footer-title">
					<h3>Latest News</h3>
				</div>
					<div className="d-flex justify-content-around ">
							<p  className="container">I am work in digital <br/> Cru Company</p>
					</div>
			</div>
		</div>
</div>
</section>
          </div>
      );
  }
}
export default Footer;