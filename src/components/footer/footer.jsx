import './footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
        <div className="socialMedia">
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedin} />
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Footer
