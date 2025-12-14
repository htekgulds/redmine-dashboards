import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MenuDropdown from './MenuDropdown'
import MenuOpen from './MenuOpen'

export default function Navbar () {
  return (
    <div className='navbar bg-base-100 shadow-sm'>
      <div className='navbar-start'>
        {/* Left Side */}
        {/* <MenuDropdown /> */}
        <a className='btn btn-ghost text-xl' href='/'>
          <FontAwesomeIcon icon="fa-solid fa-gauge-high" />
          Redmine Dash
        </a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        {/* Center */}
        {/* <MenuOpen /> */}
      </div>
      <div className='navbar-end'>
        {/* Right Side */}
      </div>
    </div>
  )
}
