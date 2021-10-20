import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if(window.innerWidth <= 500) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	window.addEventListener('resize', showButton);

  	return (
    <>
      <nav className="navbar">
		<NavLink to='/' className='navbar-logo'>
			<h3 style={{ margin:'0 0 25px 0' }}>Erica Fu</h3>
		</NavLink>
		<div className="navbar-container">
			<div className='menu-icon' onClick={handleClick}>
				<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
			</div>
			<ul className={click ? 'nav-menu active' : 'nav-menu'}>
				<li className='nav-item'>
					<NavLink exact to='/' activeClassName="active" className='nav-links' onClick={scrollToTop}>
						Home
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink to='/Projects' activeClassName="active" className='nav-links' onClick={scrollToTop}>
						Projects
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink to='/Resume' activeClassName="active" className='nav-links' onClick={scrollToTop}>
						Resume
					</NavLink>
				</li>
			</ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;