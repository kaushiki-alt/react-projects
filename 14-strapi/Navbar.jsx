import { useGlobalContext } from './src/context'
import { FaBars } from 'react-icons/fa'
import NavLinks from './NavLinks'

const Navbar = () => {
    const {openSidebar} =  useGlobalContext()
  return (
    <nav className='navbar'>
        <div className="nav-header">
<h3 className="logo">Strapi</h3>
<button type="button" className='btn sidebar-toggle' onClick={openSidebar}>
    <FaBars/>
</button>

<NavLinks/>
        </div>

   </nav>
  )
}

export default Navbar
