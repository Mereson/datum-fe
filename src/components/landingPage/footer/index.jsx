import {
  DatumLogo,
  Facebook,
  Instagram,
  Linkedin,
  X,
  Youtube, 
} from "../../../assets";
import { FaRegEnvelope, FaPhoneAlt } from "react-icons/fa";
import styles from "./styles.module.css";

export const Footer = () => {
  return (
    <section className={styles.footer_container}>
      <div className={styles.footer}>
        <div className={`${styles.footer_card} ${styles.followus}`}>
          <div className={styles.brand}><img src={DatumLogo} alt=""/></div>
          <div className={styles.follow}>Follows Us On</div>
          <div className={styles.socials}>
            <img src={Linkedin} alt="" />
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
            <img src={X} alt="" />
            <img src={Youtube} alt="" />
          </div>
        </div>

        <div className={styles.footer_card}>
        <div className={styles.card_title}>Our Company</div>
          <div className={styles.our_company}>
            <div className={styles.useful_links}>Home</div>
            <div className={styles.useful_links}>About us</div>
            <div className={styles.useful_links}>Product & Services</div>
            <div className={styles.useful_links}>Client</div>
          </div>
        </div>

        <div className={styles.footer_card}>
        <div className={styles.card_title}>Contact Us</div>
          <div className={styles.our_company}>
            <div className={styles.useful_links}><span><FaRegEnvelope /> Email: Courageobunike@gmail.com</span></div>
            <div className={styles.useful_links}><span><FaPhoneAlt /> Phone: +234 904 985 4437</span></div>            
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.copywright}>Copyright 2024 © Datum. All rights reserved.</div>
    </section>   
  );
};
