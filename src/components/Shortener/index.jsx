import React, { useState, useRef } from 'react'
import styles from './styles.module.css';
import BgMobile from "../../../images/bg-shorten-mobile.svg"

export default function Shortener () {
  const [link, setLink] = useState('')
  const [error, setError] = useState('')
  const inputRef = useRef(null)

  function handleShortenerBtn() {
    if (link === '') {
      setError('Please add a link')
    } else if (inputRef.current) {
      setLink(inputRef.current.value)
    }
  }

  return (
    <section>
      <div className={styles.container}>
        <img src={BgMobile} alt="Background image" />
        <input type="text" placeholder="Shorten a link here..." ref={inputRef} className={styles.container_input}/>
        {!!error && <span className={styles.error_msg}>{error}</span>}
        <button type="button" className={styles.container_btn} onClick={handleShortenerBtn}>Shorten it!</button>
      </div>
    </section>
  )
}