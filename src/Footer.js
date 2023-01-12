import React from 'react';
import './Footer.css';
import Logo from './S.png';

function Footer() {
    return (
        <div>
            <footer class="footer-distributed">

                <div class="footer-left">

                    <h3> <img src={Logo} alt="Logo" className='logo1'/></h3>

                    <p class="footer-links">
                        <a href="#" class="link-1">Home</a>

                        <a href="#">Blog</a>

                        <a href="#">Pricing</a>

                        <a href="#">About</a>

                        <a href="#">Faq</a>

                        <a href="#">Contact</a>
                    </p>

                    <p class="footer-company-name">Company Name © 2022 VSDEV</p>
                </div>

                <div class="footer-center">

                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>E-155 Noida</span> Sector-63</p>
                    </div>

                    <div>
                        <i class="fa fa-phone"></i>
                        <p>+1 888888888</p>
                    </div>

                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="mailto:support@company.com">Search@example.com</a></p>
                    </div>

                </div>

                <div class="footer-right">

                    <p class="footer-company-about">
                        <span>About the company</span>
                        The search bar is also the best place to go when you need to get things done on your Windows 10 device. Let's say you need to download an app, Search can find it for you fast. For example, type "download microsoft to-do" or "download solitaire" and get an install link in the results preview. It's also an easy way to get Tech Help ...
                    </p>

                </div>

            </footer>
        </div>
    )
}

export default Footer;
