import './footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCampground } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="container">
        <h3>
          Wood<span>J</span>oy
        </h3>
        <a href="#top" className="campground">
          <FontAwesomeIcon icon={faCampground} className="#top" />
        </a>
        <div className="socialMedia">
          <ul>
            <li>
              <a href="https://github.com/JohanFernandoLema">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/johan-lema-farinango-a02b11220/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="lastSection">
        <div>Copyright @ 2023 Woodjoy. All rights reserved.</div>
        <div className="privacy">Privacy Policy</div>
      </div>
    </div>
  )
}
export default Footer
