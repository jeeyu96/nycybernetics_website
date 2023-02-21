import React from "react";
import ServicesImg from './../../assets/images/services-image.png';
function Wedo() {
  return (
    <section class="what-we-do grey-bg section-space my-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6 we-do-text">
            <h2 class="blue">What we do</h2>
            <p class="my-3">
              At the NY Construction Office, we combine mechanical engineering
              with computer science. Our goal is to lead companies to better
              economic efficiency by solving your technical problem.{" "}
            </p>
            <ul class="tick-list">
              <li>
                Right from the beginning, you benefit from our full commitment.
              </li>
              <li>
                To achieve this, we combine our engineering knowledge from
                theory and practice.
              </li>
              <li>
                Your specific problem goes hand in hand with our development or
                design.
              </li>
              <li>
                Of course, we take full responsibility, so you can take care of
                other valuable resources in your company.
              </li>
              <li>We always communicate our methods and ideas with you!</li>
            </ul>
            <button type="button" class="blue-btn mt-3">
              Contact Us <i class="bi bi-arrow-right"></i>
            </button>
          </div>
          <div class="col-md-6 we-do-image align-self-center">
            <img src={ServicesImg} alt="services-image" width="100%" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Wedo;
