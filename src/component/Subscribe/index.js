import React from 'react';
import MainLogo from './../../assets/images/main-logo.png';
function Subscribe() {
    return ( 
        <section class="subscribe section-space blue-bg">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-8 col-md-10 text-center">
					<div class="logo">
						<img src={MainLogo} alt="Main Logo" />
					</div>
					<h3 class="white my-4">Let Us Keep You Updated</h3>
					<p class="white mb-4">Subscribe to our newsletter to stay updated and notified about our new product and services</p>
					<form>
						<input type="email" name="subscribe-email" placeholder="Enter Your Email Address" />
						<input type="submit" name="subscribe" value="Subscribe Now" class="blue-btn" />
					</form>
				</div>
			</div>
		</div>
	</section>
     );
}

export default Subscribe;