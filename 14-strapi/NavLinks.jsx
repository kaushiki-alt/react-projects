import sublinks from './src/data'
import { useGlobalContext } from './src/context'

const NavLinks = () => {
    const {setPageId} =  useGlobalContext();
  return (
        <div className="nav-links">
          {sublinks.map((link) => {
            const {pageId, page} = link;
            return (
              <button key={pageId} type="button" className='nav-link' onMouseEnter={() => setPageId(pageId)}>{page}</button>
            )
          })}
        </div>

  )
}

export default NavLinks
