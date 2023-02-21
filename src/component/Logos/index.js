import React from "react";
import IconLogo1 from './../../assets/images/icon-logo-1.png';
import IconLogo2 from './../../assets/images/icon-logo-2.png';
import IconLogo3 from './../../assets/images/icon-logo-3.png';
import IconLogo4 from './../../assets/images/icon-logo-4.png';
import IconLogo5 from './../../assets/images/icon-logo-5.png';
import IconLogo6 from './../../assets/images/icon-logo-6.png';
function Logos() {
  return (
    <section class="banner-logos grey-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-md-4 col-6 icon-logo">
            <img src={IconLogo1} alt="Icon Logo" />
          </div>
          <div class="col-lg-2 col-md-4 col-6 icon-logo">
            <img src={IconLogo2} alt="Icon Logo" />
          </div>
          <div class="col-lg-2 col-md-4 col-6 icon-logo">
            <img src={IconLogo3} alt="Icon Logo" />
          </div>
          <div class="col-lg-2 col-md-4 col-6 icon-logo">
            <img src={IconLogo4} alt="Icon Logo" />
          </div>
          <div class="col-lg-2 col-md-4 col-6 icon-logo">
            <img src={IconLogo5} alt="Icon Logo" />
          </div>
          <div class="col-lg-2 col-md-4 col-6 icon-logo">
            <img src={IconLogo6} alt="Icon Logo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Logos;
