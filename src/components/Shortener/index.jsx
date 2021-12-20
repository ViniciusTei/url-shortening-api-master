import React from 'react'
import styles from './styles.module.css';

export default function Shortener () {
  return (
    <section>
      <div className={styles.container}>
        <input type="text" placeholder="Shorten a link here..." className={styles.container_input}/>
        <button type="button" className={styles.container_btn}>Shorten it!</button>
      </div>
    </section>
  )
}