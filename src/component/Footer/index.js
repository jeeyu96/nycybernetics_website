import React from "react";
import MainLogo from './../../assets/images/main-logo.png';
function Footer() {
  return (
    <footer>
      <div class="footer-top section-space pb-4">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-md-4 footer-logo">
              <a href="#">
                <img src={MainLogo} alt="Main Logo" width="250px" />
              </a>
              <p class="mt-3">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim.
              </p>
            </div>
            <div class="col-md-2 footer-list">
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div class="col-md-2 footer-list">
              <h5>Company</h5>
              <ul>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">Sign Up</a>
                </li>
                <li>
                  <a href="#">FAQ’s</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
            <div class="col-xl-3 col-md-4 footer-list contact">
              <h5>Get In Touch</h5>
              <ul>
                <li class="mail">
                  <a href="mailto:contact@nycybernetics.com">
                    contact@nycybernetics.com
                  </a>
                </li>
                <li class="web">
                  <a href="#">www.nycybernetics.com</a>
                </li>
                <li class="phone">
                  <a href="tel:123-456-7890">123-456-7890</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom py-4 blue-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <p class="white">
                Copyright © NY Cybernetics. All Rights Reserved
              </p>
            </div>
            <div class="col-md-4 text-center">
              <a href="#" class="white">
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
