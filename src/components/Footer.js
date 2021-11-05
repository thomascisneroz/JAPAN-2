import React from 'react'
import { Button } from './Button'
import './footer.css'
import {Link} from 'react-router-dom'

function Footer() {
    return(
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">Join to see the WONDERS of Japan!</p>
                    <p className="footer-sub-text">Feel free to subscribe.</p>
                        <div className="inputs">
                            <form>
                                <Button path='/sign-up' buttonStyle='btn--outline'>Subscribe</Button>
                            </form>
                        </div>
            </section>
            <div class="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>Your next trip awaits.</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to='/'>Submit Videos</Link>
                        <Link to='/'>Influencers</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Ambassadors</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                    <Link to='/' className="social-media-logo">
                        Japan <i className="fas fa-fan" alt="logo" />
                    </Link>
                    </div>
                    <small className="website-rights">Japan <i className="fas fa-fan"/> <i className="far fa-copyright"/> 2022</small>
                    <div className="social-icons">
                    <Link to='/' className="social-icon-facebook" target="_blank" aria-label='Facebook'><i className="fab fa-facebook-f"/></Link>
                    <Link to='/' className="social-icon-instagram" target="_blank" aria-label='Instagram'><i className="fab fa-instagram"/></Link>
                    <Link to='/' className="social-icon-youtube" target="_blank" aria-label='Youtube'><i className="fab fa-youtube"/></Link>
                    <Link to='/' className="social-icon-twitter" target="_blank" aria-label='Twitter'><i className="fab fa-twitter"/></Link>
                    <Link to='/' className="social-icon-twitter" target="_blank" aria-label='LinkedIn'><i className="fab fa-linkedin"/></Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Footer;