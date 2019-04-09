import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

class Hero extends React.Component {
  render() {
    const { children } = this.props
    return (
      <section className="hero">
        <div className="container">{children}</div>
      </section>
    )
  }
}

export default Hero
