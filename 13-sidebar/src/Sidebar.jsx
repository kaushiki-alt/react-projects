import React from 'react'
import { useGlobalContext } from './Context'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { links, social } from './data'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  return (
    <div>
      {isSidebarOpen && (
        <aside className="sidebar-container">
          <div className="sidebar-header">
            <img src={logo} alt="Logo" className='logo' />
            <button className="close" onClick={closeSidebar}>
              <FaTimes />
            </button>
          </div>

          <ul className="links">
            {links.map((link) => {
              const { id, url, text, icon } = link;
              return (
                <li key={id}><a href={url}>{icon}{text}</a></li>
              )
            })}
          </ul>
          <ul className="socials">
            {social.map((item) => {
              const { id, url, icon } = item;
              return (
                <li key={id}><a href={url}>{icon}</a></li>
              )
            })}
          </ul>
        </aside>
      )}
    </div>
  )
}

export default Sidebar
