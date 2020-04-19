import React from 'react'

export default function Contact() {

  return (
    <div className="container teal lighten-4 rounded ">
      <div className="row">
        <h2 classNameName="center cyan darken-3 rounded-top white-text font-xstitch">
          Contact Me
        </h2>
        <div className="col s12 ">
          <form className="rounded center" action="https://formspree.io/mjvylzjq" method="POST">
            <div className="red lighten-5">
              <label for="ContactFormName">Name:</label>
              <input name="name" type="text" id="ContactFormName" />
            </div>
            <div className="red lighten-5">
              <label for="ContactFormEmail">Email:</label>
              <input name="fromemail" type="email" id="ContactFormEmail" />
            </div>
            <div className="red lighten-5">
              <label for="ContactFormMessage">Message:</label>
              <textarea name="message" id="ContactFormMessage" rows="10"></textarea>
            </div>
            <hr />
            <button className="btn waves-effect waves-light cyan darken-3" type="submit" name="action">
              Submit
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
      <div className="row section">
        <div className="center">
          <p>
            Form submission powered by
            <a href="https://formspree.io/">formspree</a>
          </p>
        </div>
      </div>
    </div>
  )
}