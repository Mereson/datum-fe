import { HeroImg } from "../../../assets"
import styles from './styles.module.css'

export const Hero = () => {
  return (
    <section className={styles.hero_container} id="herocontainer">
      <div className={styles.hero}>
        <div className={styles.heroleft} >
          <p>Streamline Your School Management with Ease.</p>
          <button className={styles.herobtn}>Get Started</button>
        </div>
        <div className={styles.heroright}>
          <img src={HeroImg} alt="" className={styles.heroimage}/>
        </div>
      </div>
    </section>  
  )
}
