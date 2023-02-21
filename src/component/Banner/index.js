import React from 'react';
import Bannerimg from './../../assets/images/banner-image.png'; 

function Banner() {
    return ( 
        <section class="home-banner blue-bg">
		<div class="container">
			<div class="row">
				<div class="col-md-7 banner-text">
					<h1  class="white">The Powerful Features For Your Better Future</h1>
					<p class="white mt-4 mb-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
					<button type="button" class="white-btn mr-3">Get Started <i class="bi bi-arrow-right"></i></button>
					<button type="button" class="blue-btn">Contact Us <i class="bi bi-arrow-right"></i></button>
				</div>
				<div class="col-md-5 banner-image">
					<img src={Bannerimg} alt="Banner" width="100%" />
				</div>
			</div>
		</div>
	</section>
     );
}

export default Banner;