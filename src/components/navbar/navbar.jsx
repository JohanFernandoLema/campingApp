import '@fontsource/poppins'
import './navbar.scss'
const Navbar = () => {
  return (
    <div className="mainBackground">
      <div className="wrapper">
        <div className="title">Woodjoy</div>
        <div className="links">
          <ul>
            <li>
              <a
                href="
            #"
              >
                Home
              </a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="storeLink">
          <button type="button">Buy Equipment</button>
        </div>
      </div>
      <div className="quote">
        <h1>
          <span>Explore the outdoors</span> <br />
          by bringing your inner explorer out
        </h1>
      </div>
    </div>
  )
}
export default Navbar
