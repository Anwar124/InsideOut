import React from 'react';
import '../CssFolder/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-column">
        <h3>Contact</h3>
        <br />
        <p>contact@insideout.com</p>
      </div>
      <div className="footer-column">
        <h3>Copy Rights</h3>
        <br />
        <p>&copy; 2023 InsideOut. All Rights Reserved.</p>
      </div>
      <div className="footer-column">
        <h3>Navigate</h3>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/building">Building</a></li>
            <li><a href="">Real Estate</a></li>
            <li><a href="">Guest House</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
