import React from 'react'
import styles from './styles.module.css'

export default function NavBar() {
  return (
    <nav className={styles.nav_container}>
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
        <hr />
        <li>Login</li>
        <li>Sign Up</li>
      </ul>
    </nav>
  )
}