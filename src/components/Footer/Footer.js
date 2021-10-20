import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            Erica Fu
                        </Link>
                    </div>
                    <small className="website-rights">Created with React 2021</small>
                    <div className="social-icons">
                        <a 
                            className="social-icon-link linkedIn"
                            target='_blank'
                            href='https://www.linkedin.com/in/erica-fu-15b3a61b9/'
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a 
                            className="social-icon-link github"
                            target='_blank'
                            href='https://github.com/erica-w-fu'
                        >
                            <i className="fab fa-github"></i>
                        </a>
                        <a 
                            className="social-icon-link instagram"
                            target='_blank'
                            href='https://www.instagram.com/ericacreatesss/'
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a 
                            className="social-icon-link facebook"
                            target='_blank'
                            href='https://www.facebook.com/erica.fu.524'
                        >
                            <i className="fab fa-facebook"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
