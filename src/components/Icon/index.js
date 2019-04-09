import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import React from 'react'

import {
  faApple,
  faAws,
  faFacebook,
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faPhp,
  faReact,
  faTwitter,
  faVuejs,
  faAzure,
} from '@fortawesome/free-brands-svg-icons'
import './style.scss'

library.add(
  faApple,
  faAws,
  faFacebook,
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faPhp,
  faReact,
  faTwitter,
  faVuejs
)

const Icon = ({ name, title }) => (
  <div className="icon" title={title}>
    <FontAwesomeIcon icon={['fab', name]} />
  </div>
)

export default Icon
