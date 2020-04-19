import React from 'react'

export default function Contact() {

  return (
    <div class="container teal lighten-4 rounded ">
      <div class="row">
        <h2 class="center cyan darken-3 rounded-top white-text font-xstitch">
          Contact Me
        </h2>
        <div class="col s12 ">
          <form class="rounded center" action="https://formspree.io/mjvylzjq" method="POST">
            <div class="red lighten-5">
              <label for="ContactFormName">Name:</label>
              <input name="name" type="text" id="ContactFormName" />
            </div>
            <div class="red lighten-5">
              <label for="ContactFormEmail">Email:</label>
              <input name="fromemail" type="email" id="ContactFormEmail" />
            </div>
            <div class="red lighten-5">
              <label for="ContactFormMessage">Message:</label>
              <textarea name="message" id="ContactFormMessage" rows="10"></textarea>
            </div>
            <hr />
            <button class="btn waves-effect waves-light cyan darken-3" type="submit" name="action">
              Submit
              <i class="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
      <div class="row section">
        <div class="center">
          <p>
            Form submission powered by
            <a href="https://formspree.io/">formspree</a>
          </p>
        </div>
      </div>
    </div>
  )
}