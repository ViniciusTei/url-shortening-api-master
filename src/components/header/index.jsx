import React, { useState } from 'react'

import { GrMenu } from 'react-icons/gr';
import Logo from "../../../images/logo.svg";
import NavBar from '../navbar';
import styles from './styles.module.css';

export default function Header() {
  const [onNavBarOpen, setOnNavBarOpen] = useState(false);
  return (
    <header className={styles.header}>
        <img src={Logo} alt="Logo" />

        <GrMenu size="28px" color="#bfbfbf" onClick={() => setOnNavBarOpen(!onNavBarOpen)}/>
        
        {onNavBarOpen && (
          <div className={styles.nav}>
            <NavBar/>
          </div>
        )}
    </header>
  )
}