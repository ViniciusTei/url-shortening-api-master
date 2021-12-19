import React from 'react'

import { GrMenu } from 'react-icons/gr';
import Logo from "../../../images/logo.svg";
import styles from './styles.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
        <img src={Logo} alt="Logo" />

        <GrMenu size="28px" color="#bfbfbf" />
    </header>
  )
}