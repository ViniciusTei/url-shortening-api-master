import React, { useState, useEffect } from "react";

import Footer from "../components/footer";
import WorkingImage from "../../images/illustration-working.svg";
import BoostMobile from "../../images/bg-boost-mobile.svg";
import BoostDesktop from "../../images/bg-boost-desktop.svg";
import Header from "../components/header";
import styles from "../styles/home.module.css";
import Shortener from "../components/Shortener";
import Statistics from "../components/StatiticsDetails";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function Home() {
  const [isMobile, setIsMobile] = useState(true)
  const window = useWindowDimensions()

  useEffect(() => {
    if(window.width >= 1200) {
      setIsMobile(false)
    }
  }, [window])
  return (
    <div>
      <Header />
      <section className={styles.section}>
        <img src={WorkingImage} alt="Person using a computer" />
        <div>
          <h1>More than just shorter links</h1>

          <p>
            Build your brand's recognition and get detailed insights 
            on how your links are performing.
          </p>

          <div className={styles.container_btn}>
            <button type="button" className={styles.btn}>Get Started</button>

          </div>
        </div>
        
      </section>
      <Shortener />
      <Statistics />
      <section className={styles.get_started}>
        <img src={isMobile ? BoostMobile : BoostDesktop} alt="boost bg" />
        <strong>Boost your links today</strong>
        <button>Get Started</button>
      </section>
      <Footer/>
    </div>
  )
}