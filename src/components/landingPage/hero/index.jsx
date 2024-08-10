import { HeroImg } from "../../../assets"
import styles from './styles.module.css'

export const Hero = () => {
  return (
    <section className={styles.herocontainer} id="herocontainer">
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
    // <section className="flex gap-[130px] justify-center items-center px-[100px] py-14 bg-[#132985]" id="hero">
    //   <img src={HeroImg} className="w-[450px] h-[400px]" alt="Hero Image" />
    //   <article className="flex flex-col gap-9 text-white justify-center">
    //     <h1 className="font-bold text-5xl leading-[58.48px]">
    //       Streamline Your School Management with Ease.
    //     </h1>
    //     <Button link={"/login"} text={"Get started"} style={"text-xl font-bold py-3 w-[190px]"} />
    //   </article>
    // </section>
  )
}
