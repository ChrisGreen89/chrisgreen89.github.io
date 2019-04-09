import React from 'react'
import { Link } from 'gatsby'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary">
        <div className="container">
          <Link className="text-center" to="/">
            <h1 className="navbar-brand mb-0">{title}</h1>
          </Link>
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row  ml-auto">
              <li
                className={
                  location.pathname === '/' ? 'nav-item active' : 'nav-item'
                }
              />
              <li
                className={
                  location.pathname === '/profile/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              />
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navi
