import React from 'react'
import styles from './styles.module.css';
import BgMobile from "../../../images/bg-shorten-mobile.svg"

export default function Shortener () {
  return (
    <section>
      <div className={styles.container}>
        <img src={BgMobile} alt="Background image" />
        <input type="text" placeholder="Shorten a link here..." className={styles.container_input}/>
        <button type="button" className={styles.container_btn}>Shorten it!</button>
      </div>
    </section>
  )
}