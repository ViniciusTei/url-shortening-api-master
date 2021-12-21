import React from "react";

import Footer from "../components/footer";
import WorkingImage from "../../images/illustration-working.svg";
import BoostMobile from "../../images/bg-boost-mobile.svg";
import Header from "../components/header";
import styles from "../styles/home.module.css";
import Shortener from "../components/Shortener";
import Statistics from "../components/StatiticsDetails";


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

        <div className={styles.container_btn}>
          <button type="button" className={styles.btn}>Get Started</button>

        </div>
      </section>
      <Shortener />
      <Statistics />
      <section className={styles.get_started}>
        <img src={BoostMobile} alt="boost bg" />
        <strong>Boost your links today</strong>
        <button>Get Started</button>
      </section>
      <Footer/>
    </div>
  )
}