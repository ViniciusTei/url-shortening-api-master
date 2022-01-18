import React from 'react'
import styles from './styles.module.css'

export default function NavBar({ isActive }) {
  return (
    <nav className={`${styles.nav_container} ${isActive ? styles.active : null}`}>
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
        <div />
        <li>Login</li>
        <li>Sign Up</li>
      </ul>
    </nav>
  )
}