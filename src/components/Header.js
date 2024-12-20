

import {Link} from 'react-router-dom';

import { useState } from 'react';



import github from '.././assets/github.svg';

function Header () {
    const [isOpen, setIsOpen] = useState(false);

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    return (
        <header>
        <nav className="navbar navbar-expand-lg justify-content-between navbar-dark bg-dark fixed-top ">
            <div className="container">
                <a className="navbar-brand" href='./'>chrisfehrer.com</a>
                <button className="navbar-toggler" type="button" onClick = {toggleDropdown} data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to ='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to ='/projects/'>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to ='/photography/'>Photography</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to ='/games/'>Games</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to ='/contact/'>Contact</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0 social">
                        <li className="nav-item">
                            <a href="https://github.com/clracho" target="_blank" rel="noreferrer"><img src={github} alt="" height="36" class="icon-color hover-white"/></a>
                        </li>
                        {/* <li className="nav-item">
                            <a href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></a>
                        </li>
                        <li className="nav-item">
                            <a href="https://youtube.com" target="_blank"><i className="fab fa-youtube"></i></a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    
    );
}

export default Header;