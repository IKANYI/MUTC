import HeaderBottom from "./HeaderBottom"
import HeaderTop from "./HeaderTop"
import './Header.css'
const Header = () => {
  return(
    <header className="header">
    <HeaderTop/>
    <HeaderBottom/>
  </header>
  )
  
}
export default Header