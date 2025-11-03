import { useRef } from 'react'
import { useGlobalContext } from './context'
import sublinks from './data'

const Submenu = () => {
    const {pageId, setPageId} = useGlobalContext()
    const currentPage = sublinks.find((link) => link.pageId === pageId)
    const submenuContainer = useRef(null);


const handleMouseLeave =(event) => {
  const subMenu = submenuContainer.current;
  const {left, right, bottom, top} = subMenu.getBoundingClientRect();
  const {clientX, clientY} = event;

  if (clientX< left -1 || clientX > right -1 || clientY < top-1 || clientY > bottom - 1) {
    setPageId(null);
  }
}

  return (
  <div className={pageId? 'show-submenu submenu' : 'submenu'} 
  onMouseLeave={handleMouseLeave}
  ref={submenuContainer}>
    <h4>{currentPage?.page}</h4>
    <div className="submenu-links">
    {currentPage?.links?.map((link) => {
        const{id, label, icon, url} = link;
        return(
            <a key={id} href={url}>{icon}{label}</a>
        )
    })}
    </div>
  </div>
  )
}

export default Submenu
