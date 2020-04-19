import React from "react";
import {
  Link
} from "react-router-dom";
export default function Navbar({ about, contact, portfolio, navClick }) {


  return (<header>
    <nav className="pink cyan darken-4 pink-text text-lighten-3">
      <div className="nav-wrapper pad-left">
        <a href="index.html" className="brand-logo font-xstitch">Julie Theriault</a>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <ul className="right hide-on-med-and-down font-xstitch">
          <li className={about}><Link to="/" name="about" onClick={navClick}>About Me</Link></li>
          <li className={contact}><Link to="/contact" name="contact" onClick={navClick}>Contact Me</Link> </li>
          <li className={portfolio}><Link to="/portfolio" name="portfolio" onClick={navClick}>My Portfolio</Link></li>
          <li>
            <a href="https://www.linkedin.com/in/julie-theriault-a6b84572/">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/JulieT2319">GitHub</a>
          </li>
        </ul>
      </div>
    </nav>

    <ul className="sidenav cyan lighten-5 font-xstitch" id="mobile-demo">
      <li className={about}><Link to="/" name="about" onClick={navClick}>About Me</Link></li>
      <li className={contact}><Link to="/contact" name="contact" onClick={navClick}>Contact Me</Link> </li>
      <li className={portfolio}><Link to="/portfolio" name="portfolio" onClick={navClick}>My Portfolio</Link></li>
      <li>
        <a href="https://www.linkedin.com/in/julie-theriault-a6b84572/">LinkedIn</a>
      </li>
      <li>
        <a href="https://github.com/JulieT2319">GitHub</a>
      </li>

    </ul>
  </header >)
}