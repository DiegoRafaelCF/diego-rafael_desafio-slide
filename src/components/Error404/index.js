import './Error404.css';

import logo from '../Header/header-images/Logo.png'

function Error404() {
    return(
        <div className="main">
            <div className="msg">
                <img src={logo} alt='logo'/>
                <span>Em breve...</span>
            </div>
        </div>
    );
}

export default Error404;