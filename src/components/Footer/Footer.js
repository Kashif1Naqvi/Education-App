import React,{Component} from 'react';
import './css/style.css';
class Footer extends Component{
  render(){
    return(
      <div  className="text-muted">
			<iframe width="100%" height="350" title="Google map" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.uk/maps?f=q&source=s_q&hl=en&geocode=&q=15+Springfield+Way,+Hythe,+CT21+5SH&aq=t&sll=52.8382,-2.327815&sspn=8.047465,13.666992&ie=UTF8&hq=&hnear=15+Springfield+Way,+Hythe+CT21+5SH,+United+Kingdom&t=m&z=14&ll=51.077429,1.121722&output=embed" /> 
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
						<p>Email : <a target="blank" href="https://mail.google.com/mail/u/0/?sw=1&token=[%22cftp%22,%228e8676bec7%22,%22Yz7hHBK2O3awHRYZzif6TA\u003d\u003d%22,%22ZyMrc6cBAw-rFZnvtXyj5A\u003d\u003d%22,%227118,7050,7027,7185,7026,7179,7236,7281,7335,7384,6912,6949,7016,7243,6772,6839,7361,6765,7417,7008,6761,7386,7196,7325,7128,6758,7108,10041,6745,7137,6755,7360,7401,6763,7399,7436,7020,6767,6944,7387,7092,7270,7371,7186,7164,7024,7354,7153,6887,7238,7005,7156,6807,6842,6984,7295,7434,7150,7203,7161,7269,6804,7395,6749,6851,7068,6778,7183,7292,7195,7294,6821,7083,7398,6792,7240,6969,7018,6812,7392,6836,7427,6999,7176,7030,7147,6929,7321,7310,7391,6806,7444,6853,7096,6858,7172,7023,7324,6838,7278%22]&dilte=0#inbox">naqvishah582@gmail.com</a></p>
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
					<li><a target="blank" href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0002-introduction-to-computational-thinking-and-data-science-fall-2016/">Data Science</a></li>
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