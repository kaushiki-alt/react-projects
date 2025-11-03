import React, { useRef, useState } from 'react'
import { links, social } from './data'
import logo from './assets/logo.svg'
import { FaBars } from 'react-icons/fa'
const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)

    const linksRef = useRef(null);
    const linkContainerRef = useRef(null)

    const toggleNavbar = () => {
        setShowLinks(!showLinks);
    }

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  };
    return (
        <nav>
            <div className='nav-center'>
                <div className="header">
                    <img src={logo} alt="" className='logo' />
                    <button className='nav-toggle' onClick={toggleNavbar}>
                        <FaBars />
                    </button>
                </div>
                    <div className="link-container" ref={linkContainerRef} style={linkStyles}>
                        <ul className='links' ref={linksRef}>
                            {links.map((link) => {
                                const { id, url, text } = link;
                                return (
                                    <li key={id}>
                                        <a href={url}>{text}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                <ul className='social-links'>
                    {social.map((item) => {
                        return (
                            <li>
                                <a href={item.url}>{item.icon}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
