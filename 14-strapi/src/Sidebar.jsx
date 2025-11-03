import React from 'react'
import sublinks from './data'
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext()
    return (
        <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
            <div className="sidebar-container">
                <button type='button' onClick={closeSidebar} className='close-btn'>
                    <FaTimes />
                </button>
                    <div className="links">
                        {sublinks.map((link) => {
                            const { pageId, page, links } = link;
                            return (
                                <article key={pageId}>
                                    <h4>{page}</h4>
                                    <div className="sublinks">
                                        {links.map((link) => {
                                            const { id, label, url, icon } = link;
                                            return (
                                                <a key={id} href={url}>{icon}{label}</a>
                                            )
                                        })}
                                    </div>

                                </article>

                            )
                        })}
                    </div>
            </div>
        </aside>
    )
}

export default Sidebar
