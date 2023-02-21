import React from 'react';
import ServiceIcon1 from "./../../assets/images/services-icon-1.png";
import ServiceIcon2 from "./../../assets/images/services-icon-2.png";
import ServiceIcon3 from "./../../assets/images/services-icon-3.png";
function Services() {
    return ( 
        <section class="services section-space">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-7 col-md-10 text-center mb-5">
					<h2 class="blue">Our Services for You</h2>
					<p class="my-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<div class="icon-card">
						<img src={ServiceIcon1} alt="Service Icon" />
						<h4 class="blue">Construction</h4>
						<ul class="tick-list">
							<li>Technical construction of your problem using modern software</li>
							<li>Creation of drawings</li>
							<li>Mediation of suitable companies for the production of your component</li>
							<li>Constant accompaniment</li>
						</ul>
					</div>
				</div>
				<div class="col-md-4">
					<div class="icon-card">
						<img src={ServiceIcon2} alt="Service Icon" />
						<h4 class="blue">Project Implementation</h4>
						<ul class="tick-list">
							<li>Support of your projects as technical consultants</li>
							<li>Design of components</li>
							<li>Transparent communication</li>
						</ul>
					</div>
				</div>
				<div class="col-md-4">
					<div class="icon-card">
						<img src={ServiceIcon3} alt="Service Icon" />
						<h4 class="blue">Support for your products</h4>
						<ul class="tick-list">
							<li>Improvement possibilities</li>
							<li>Developments</li>
							<li>Production optimization</li>
							<li>Cost reductions</li>
							<li>Development process</li>
						</ul>
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

export default Services;