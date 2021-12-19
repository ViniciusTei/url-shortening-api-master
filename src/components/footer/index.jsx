import React from "react";

import styles from "./styles.module.css";
import Logo from "../../../images/logo-white.svg";
import IconFacebook from "../../../images/icon-facebook.svg";
import IconTwitter from "../../../images/icon-twitter.svg";
import IconPinterest from "../../../images/icon-pinterest.svg";
import IconInstagram from "../../../images/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <img src={Logo} alt="Logo" className={styles.logo}/>
        <div>
          <p>Features</p>
          <ul>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div>
          <p>Resources</p>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <p>Company</p>
          <ul>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.social}>
          <img src={IconFacebook} alt="facebook" />
          <img src={IconTwitter} alt="twitter" />
          <img src={IconPinterest} alt="Pinterest" />
          <img src={IconInstagram} alt="instagram" />
        </div>
      </footer>
  )
}