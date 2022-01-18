import React from 'react'
import styles from './styles.module.css';
import IconBrandRecognition from "../../../images/icon-brand-recognition.svg";
import IconDetailedRecords from "../../../images/icon-detailed-records.svg";
import IconFullCustomizable from "../../../images/icon-fully-customizable.svg";

export default function Statistics() {
  return (
    <section className={styles.section}>
      <article className={styles.header}>
        <strong>Advanced Statistics</strong>
        <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
      </article>
      <article className={`${styles.card} ${styles.card_1}`}>
        <div>
          <img src={IconBrandRecognition} alt="Icon Brand Recognition" />

        </div>
        <strong>Brand Recognition</strong>
        <p>
          Boost your brand recognition with each click. Generic links don't 
          mean a thing. Branded links help instil confidence in your content.
        </p>
      </article>
      <article className={`${styles.card} ${styles.card_2}`}>
        <span/>
        <div>
          <img src={IconDetailedRecords} alt="Icon Detailed Records" />

        </div>
        <strong>Detailed Records</strong>
        <p>
          Gain insights into who is clicking your links. Knowing when and where 
          people engage with your content helps inform better decisions.
        </p>
      </article>
      <article className={`${styles.card} ${styles.card_3}`}>
        <span/>
        <div>
          <img src={IconFullCustomizable} alt="Icon Fully Customizable" />

        </div>
        <strong>Fully Customizable</strong>
        <p>
          Improve brand awareness and content discoverability through customizable 
          links, supercharging audience engagement.
        </p>
      </article>
    </section>
  )
}