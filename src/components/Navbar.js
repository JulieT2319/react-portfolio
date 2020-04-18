import React from "react";
export default function Navbar({ about, contact, portfolio }) {


  return (<header>
    <nav className="pink cyan darken-4 pink-text text-lighten-3">
      <div className="nav-wrapper pad-left">
        <a href="index.html" className="brand-logo font-xstitch">Julie Theriault</a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i className="material-icons">menu</i></a>
        <ul className="right hide-on-med-and-down font-xstitch">
          <li className={about}><a href="index.html">About Me</a></li>
          <li className={contact}><a href="contact.html">Contact Me</a></li>
          <li className={portfolio}><a href="portfolio.html">My Portfolio</a></li>
          <li>
            <a href="https://www.linkedin.com/in/julie-theriault-a6b84572/">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/JulieT2319">GitHub</a>
          </li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav cyan lighten-5 font-xstitch" id="mobile-demo">
      <li class="active"><a href="index.html">About Me</a></li>
      <li><a href="contact.html">Contact Me</a></li>
      <li><a href="portfolio.html">My Portfolio</a></li>
      <li>
        <a href="https://www.linkedin.com/in/julie-theriault-a6b84572/">LinkedIn</a>
      </li>
      <li>
        <a href="https://github.com/JulieT2319">GitHub</a>
      </li>
      <li>
        <a href="assets/pdf/Resume2020.pdf" download>Download Resume</a>
      </li>
    </ul>
  </header >)
}