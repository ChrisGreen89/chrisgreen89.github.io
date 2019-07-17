import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <section className="bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1>Contact</h1>
              <p>
                <em>
                  If you're ready to get moving on a new website or modernizing
                  a current one, get in touch!
                </em>
              </p>
            </div>
            <div className="col-md-6 offset-md-2">
              <form
                id="contact-form"
                name="contact"
                method="post"
                data-netlify="true"
                role="form"
              >
                <div className="messages" />

                <div className="controls">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Name*"
                          required="required"
                          data-error="Name is required."
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email*"
                          required="required"
                          data-error="Valid email is required."
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <select
                          id="form_need"
                          name="need"
                          className="form-control"
                          required="required"
                          data-error="Please specify your need."
                        >
                          <option value="New Website">
                            New Website (from scratch!)
                          </option>
                          <option value="Website Re-Design">
                            Website Re-Design
                          </option>
                          <option value="Other">Other</option>
                        </select>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          id="form_message"
                          name="message"
                          className="form-control"
                          placeholder="Message for me *"
                          rows="4"
                          required="required"
                          data-error="Please, leave us a message."
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <input
                        type="submit"
                        className="btn btn-info btn-send btn-block btn-lg"
                        value="Send message"
                      />
                    </div>
                  </div>
                </div>
                <input type="hidden" name="form-name" value="contact" />
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
