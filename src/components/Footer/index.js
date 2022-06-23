import './Footer.css';

import { Link } from 'react-router-dom'

import libslide from'./footer-images/libslide.png'
import facebook from'./footer-images/logo-facebook.png'
import twitter from'./footer-images/logo-twitter.png'
import instagram from'./footer-images/logo-instagram.png'


function Footer() {
    return(
        <footer className='footer'>
            <div className='footer-content'>
                <img src={libslide} className='logo-libslide' alt='logo do libslide'/>
                <hr></hr>
                <div className='footer-infos'>
                    <div className='documents'>
                        <Link to='/404' className='link-footer'>Terms &amp; Conditions</Link>
                        <Link to='/404' className='link-footer'>Privacy Policy</Link>
                    </div>
                    <div className='social-media'>
                        <a href='https://www.facebook.com/' target='_blank'><img src={facebook} className='logo-libslide' alt='logo do facebook'/></a>
                        <a href='https://twitter.com/' target='_blank'><img src={twitter} className='logo-libslide' alt='logo do twitter'/></a>
                        <a href='https://www.instagram.com/' target='_blank'><img src={instagram} className='logo-libslide' alt='logo do instagram'/></a>
                    </div>
                </div>
            </div> 
        </footer>
    );
}

export default Footer;