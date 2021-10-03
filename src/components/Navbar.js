import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button.js';
import './Navbar.css';

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if(window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
					<Link to='/' className='navbar-logo'>
						Erica Fu
					</Link>
					<div className='menu-icon' onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						{/* <li className='nav-item'>
							<Link to='/' className='nav-links' onClick={closeMobileMenu}>
								About
							</Link>
						</li> */}
						<li className='nav-item'>
							<Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
								Projects
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/fun' className='nav-links' onClick={closeMobileMenu}>
								Fun
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
								Resume
							</Link>
						</li>
					</ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;