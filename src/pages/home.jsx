import React from "react";

import Footer from "../components/footer";
import WorkingImage from "../../images/illustration-working.svg";
import IconBrandRecognition from "../../images/icon-brand-recognition.svg";
import IconDetailedRecords from "../../images/icon-detailed-records.svg";
import IconFullCustomizable from "../../images/icon-fully-customizable.svg";
import Header from "../components/header";
import styles from "../styles/home.module.css";


export default function Home() {

  return (
    <div>
      <Header />
      <section className={styles.section}>
        <img src={WorkingImage} alt="Person using a computer" />
        <h1>More than just shorter links</h1>

        <p>
          Build your brand's recognition and get detailed insights 
          on how your links are performing.
        </p>

        <button type="button" className={styles.btn}>Get Started</button>
      </section>
      <section>
        <div>
          <input type="text" placeholder="Shorten a link here..."/>
          <button>Shorten it!</button>
        </div>
      </section>
      <section>
        <article>
          <strong>Advanced Statistics</strong>
          <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </article>
        <article>
          <img src={IconBrandRecognition} alt="Icon Brand Recognition" />
          <strong>Brand Recognition</strong>
          <p>
            Boost your brand recognition with each click. Generic links don't 
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </article>
        <article>
          <img src={IconDetailedRecords} alt="Icon Detailed Records" />
          <strong>Detailed Records</strong>
          <p>
            Gain insights into who is clicking your links. Knowing when and where 
            people engage with your content helps inform better decisions.
          </p>
        </article>
        <article>
          <img src={IconFullCustomizable} alt="Icon Fully Customizable" />
          <strong>Fully Customizable</strong>
          <p>
            Improve brand awareness and content discoverability through customizable 
            links, supercharging audience engagement.
          </p>
        </article>
      </section>
      <section>
        <strong>Boost your links today</strong>
        <button>Get Started</button>
      </section>
      <Footer/>
    </div>
  )
}