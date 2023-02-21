import React from 'react';
import Logo from './../../assets/images/main-logo.png';
function Header() {
    return ( 
        <header class="blue-bg">
            <div class="container">
                <div class="row header-row justify-content-end">
                    <div class="col-lg-3 col-md-6 col-8 logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div class="col-lg-9 col-md-6 col-4 menu">
                        <nav class="navbar navbar-expand-lg">
                              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                              </button>
                              <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                      <li class="nav-item">
                                        <a class="nav-link" href="#">Home</a>
                                      </li>
                                      <li class="nav-item">
                                        <a class="nav-link" href="#">Services</a>
                                      </li>
                                      <li class="nav-item">
                                        <a class="nav-link" href="#">About Us</a>
                                      </li>
                                      <li class="nav-item">
                                        <a class="nav-link" href="#">Blog</a>
                                      </li>
                                      <li class="nav-item">
                                        <a class="nav-link white-btn" href="#">Contact Us</a>
                                      </li>
                                </ul>
                              </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
     );
}

export default Header;