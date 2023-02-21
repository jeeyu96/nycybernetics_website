import React from 'react';
import AboutusIcon1 from './../../assets/images/about-us-icon-1.png';
import AboutusIcon2 from './../../assets/images/about-us-icon-2.png';
import AboutusIcon3 from './../../assets/images/about-us-icon-3.png';

function Aboutus() {
    return ( 
        <section class="about-us section-space">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-10 text-center mb-5">
					<h2 class="blue">About Us</h2>
					<p>Our goal is to solve your technical issue. To achieve this, we design and develop solutions for your specific problem. Solving technical and individual problems is our passion.</p>
				</div>
				<div class="col-md-4">
					<div class="icon-card">
						<img src={AboutusIcon1} alt="About Us Icon" />
						<p>We are available for you in the construction, development and concept creation to accompany you in your innovation.</p>
					</div>
				</div>
				<div class="col-md-4">
					<div class="icon-card">
						<img src={AboutusIcon2} alt="About Us Icon" />
						<p>Through our technical expertise and use of multiple software programs, two engineers are available to you, both from the field of mechanical engineering and software engineering. </p>
					</div>
				</div>
				<div class="col-md-4">
					<div class="icon-card">
						<img src={AboutusIcon3} alt="About Us Icon" />
						<p>With our help, you will save time and other resources. We would also be happy to travel to you for a personal meeting!</p>
					</div>
				</div>
				<div class="col-md-12 text-center mt-5">
					<button type="button" class="blue-btn">Contact Us <i class="bi bi-arrow-right"></i></button>
				</div>
			</div>
		</div>
	</section>
     );
}

export default Aboutus;