import { AboutImg, aboutus } from "../../../assets"
import styles from './styles.module.css'

export const About = () => {
  return (
    <section className={styles.about_container}>
      <p>Why Choose Us?</p>
      <div className={styles.whyus}>
        <div className={styles.whyuscard}>
          <h2>Efficiency</h2>
          <p>Our services are designed to streamline your processes and save time.</p>
        </div>
        <div className={styles.whyuscard}>
          <h2>Data-Driven</h2>
          <p>Our analytics tools help you receive personalized feedback based on real-time data.</p>
        </div>
        <div className={styles.whyuscard}>
          <h2>User-Friendly</h2>
          <p>Our intuitive design ensures a hassle-free experience for all users.</p>
        </div>
      </div>

      <div className={styles.aboutus}>
        <div className={styles.aboutusleft}>
          <h2>About Us</h2>
          <p>
            Datum is dedicated to personalized feedback through innovative technology, 
            transforming how schools manage and engage with their students.
          </p>
          <button className={styles.aboutusleft_btn}>Get Started</button>
        </div>
        <div className={styles.aboutusright}>
          <img src={aboutus} alt="" className={styles.aboutright_img} />
        </div>
      </div>
    </section>    
  )
}
