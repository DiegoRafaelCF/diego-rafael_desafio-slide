import './Header.css'

import { Link } from 'react-router-dom'

import logo from './header-images/Logo.png'
import loupe from './header-images/ico-loupe.png'

function Header() {
    
    return(
        <header className='header'>
            <div className='header-content'>
                <img src={logo} alt='logo do bibbble' className='logo-bibbble' />
                <nav className='nav-header'>
                    <Link to='/' className='link-header' >Home</Link>
                    <Link to='/404' className='link-header' >About</Link>
                    <Link to='/404' className='link-header' >Features</Link>
                    <Link to='/404' className='link-header' >Pricing</Link>
                    <Link to='/404' className='link-header' >Gallery</Link>
                    <Link to='/404' className='link-header' >Team</Link>
                    <img src={loupe} alt='logo de uma lupa' />
                </nav>
            </div>
        </header>
    )
}

export default Header;