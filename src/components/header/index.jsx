import React, { useState, useEffect } from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { GrMenu } from 'react-icons/gr';
import Logo from "../../../images/logo.svg";
import NavBar from '../navbar';
import styles from './styles.module.css';

export default function Header() {
  const { width } = useWindowDimensions()
  const [onNavBarOpen, setOnNavBarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // as we develop mobile first

  useEffect(() => {
    if (width && width > 1200) {
      setIsMobile(false)
      setOnNavBarOpen(false)
    }
  }, [width])
  return (
    <header className={styles.header}>
        <img src={Logo} alt="Logo" />

        {isMobile && <GrMenu size="28px" color="#bfbfbf" onClick={() => setOnNavBarOpen(!onNavBarOpen)}/>}
        
        {onNavBarOpen && (
          <div className={styles.nav}>
            <NavBar isActive={onNavBarOpen} />
          </div>
        )}

        {!isMobile && !onNavBarOpen && (
          <nav className={styles.nav_container}>
            <div>
              <a href="">Features</a>
              <a href="">Pricing</a>
              <a href="">Resources</a>
            </div>
            <div>
              <a href="">Login</a>
              <button className={styles.signup_btn}>Sign Up</button>
            </div>
          </nav>
        )}

    </header>
  )
}