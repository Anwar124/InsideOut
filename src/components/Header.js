import React from "react";
import { Link } from "react-scroll";
import "../CssFolder/Header.css";

function Header() {
  return (
    <header>
      <nav>
        <div class="left">
          <a href="/">InsideOut</a>
        </div>
        <div class="right">
          <ul>
            <li className="dropdown">
              <a href="/building" className="dropbtn">
                Building
              </a>
            </li>
            <li className="dropdown">
              <a href="/" className="dropbtn">
                Real Estate
              </a>
            </li>
            <li className="dropdown">
              <a href="/" className="dropbtn">
                Guest House
              </a>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="about-us-link"
              >
                About Us
              </Link>
            </li>
            <li className="dropdown">
              <a href="/contact" className="dropbtn">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
