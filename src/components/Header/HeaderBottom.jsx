import { Link } from 'react-router-dom';
const HeaderBottom = () => {
  return(
    <div className="headerBottom">
      <nav className="header-nav">
        <ol className="header-nav-list">
        <li className="header-nav-item"><Link to="/">Home</Link></li>
        <li className="header-nav-item"><Link to="/leadership">Leadership</Link></li>
        <li className="header-nav-item"><Link to="/tracks">tracks</Link></li>
        <li className="header-nav-item"><Link to="/event">Event</Link></li>
        </ol>
      </nav>
    </div>
  )
}
export default HeaderBottom;