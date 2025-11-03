import { useGlobalContext } from "./Context"
import { FaBars } from 'react-icons/fa'

const Home = () => {
  const {openSidebar, openModal} = useGlobalContext()
  return (
 <section className="ctas">
  <button type="button" onClick={openSidebar} className="toggle-sidebar">
    <FaBars/>
  </button>

  <button type="button" className="btn toggle-modal" onClick={openModal}>Open Modal</button>
   </section>
  )
}

export default Home
