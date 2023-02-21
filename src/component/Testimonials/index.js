import React from "react";
import UserPic1 from './../../assets/images/testi-image-1.png';
import UserPic2 from './../../assets/images/testi-image-2.png';
function Testimonials() {
  return (
    <section class="testimonial section-space">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7 col-md-10 text-center mb-5">
            <h2 class="blue">What People Say About Us</h2>
            <p class="my-3">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </p>
          </div>
        </div>
        <div class="row justify-content-around">
          <div class="col-lg-4 col-md-6 slide">
            <div class="testi-text">
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua non
                deserunt ullamco dolor do amet sint. Velit officia consequat
                duis enim amet minim mollit non deserunt ullamco est sit aliqua
                non deserunt ullamco”
              </p>
              <h6 class="blue mt-3">Michael Scott</h6>
              <p>Lorem Ipsum dolor sit</p>
            </div>
            <div class="testi-img text-center">
              <span></span>
              <img src={UserPic1} alt="User Pic 1" />
            </div>
          </div>
          <div class="col-lg-4 col-md-6 slide">
            <div class="testi-text">
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua non
                deserunt ullamco dolor do amet sint. Velit officia consequat
                duis enim amet minim mollit non deserunt ullamco est sit aliqua
                non deserunt ullamco”
              </p>
              <h6 class="blue mt-3">Michael Scott</h6>
              <p>Lorem Ipsum dolor sit</p>
            </div>
            <div class="testi-img text-center">
              <span></span>
              <img src={UserPic2} alt="User Pic 2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
