import React, { Component } from 'react'
import './style.scss'

class PriceTable extends Component {
  render() {
    return (
      <section className="pricing py-5">
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
        />

        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">
                    JUST-GIMME
                  </h5>
                  <h6 className="card-price text-center">$199</h6>
                  <p className="text-center">
                    Perfect if you already have your resources (copy, images,
                    brand book) and just need someone to make it come alive
                  </p>
                  <hr />
                  <ul className="fa-ul">
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check" />
                      </span>
                      <strong>3 Pages</strong>
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check" />
                      </span>
                      5 Revisions
                    </li>
                    <li className="text-muted">
                      <span className="fa-li">
                        <i className="fas fa-times" />
                      </span>
                      Custom Content Design
                    </li>
                  </ul>
                  {/* <a
                    href="#"
                    className="btn btn-block btn-primary text-uppercase"
                  >
                    Button
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">
                    WORK-WITH-ME
                  </h5>
                  <h6 className="card-price text-center">$299</h6>
                  <p className="text-center">
                    A more robust site with extra pages and revisions included.
                    Includes a one-hour consult with our web dev pros to make
                    sure the project takes off and lands exactly how you want.
                  </p>
                  <hr />
                  <ul className="fa-ul">
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check" />
                      </span>
                      <strong>5 Pages</strong>
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check" />
                      </span>
                      10 Revisions
                    </li>
                    <li className="text-muted">
                      <span className="fa-li">
                        <i className="fas fa-times" />
                      </span>
                      Custom Content Design
                    </li>
                  </ul>
                  {/* <a
                    href="#"
                    className="btn btn-block btn-primary text-uppercase"
                  >
                    Button
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">
                    STAND-BY-ME
                  </h5>
                  <h6 className="card-price text-center">$Let's Talk</h6>
                  <p>
                    You need an active, engaged and reliable web developer by
                    your side. Someone who gets what you're about and knows how
                    to make your website reflect that.
                  </p>
                  <hr />
                  <ul className="fa-ul">
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check" />
                      </span>
                      <strong>Unlimited Pages</strong>
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check" />
                      </span>
                      Unlimited Revisions
                    </li>

                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check" />
                      </span>
                      Access to Support Resources
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check" />
                      </span>
                      Access to On-Demand Graphic Designer
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check" />
                      </span>
                      Custom Hosting available*
                    </li>
                  </ul>
                  {/* <a
                    href="#"
                    className="btn btn-block btn-primary text-uppercase"
                  >
                    Let's Chat
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default PriceTable
