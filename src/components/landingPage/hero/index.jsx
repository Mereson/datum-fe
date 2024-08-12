import { HeroImg } from "../../../assets"
import { HeroStripes } from "../../../assets"
import styles from './styles.module.css'
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className={styles.hero_container} id="herocontainer">
      <div className={styles.hero}>
        <div className={styles.heroleft} >
          <p>Streamline Your School Management with Ease.</p>
          <Link to = "/login">
            <button className={styles.herobtn}>Get Started</button>
          </Link>
        </div>
        <div className={styles.heroright}>
          <img src={HeroImg} alt="" className={styles.heroimage}/>
        </div>
      </div>
      <img src={HeroStripes} alt="" className={styles.hero_stripe}/>
    </section>  
  )
}
