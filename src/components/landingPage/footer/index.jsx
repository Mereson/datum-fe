import {
  DatumLogo,
  Facebook,
  Instagram,
  Linkedin,
  X,
  Youtube,
} from "../../../assets";
import design from "./style.module.css";

export const Footer = () => {
  return (
    <div>
      <section className={design.container}>
        <div className={design["head - section"]}>
          <img src={DatumLogo} alt="datum logo" />
          <p>Copyright 2024 &COPY; Datum. All rights reserved.</p>
        </div>

        <section className={design["mid-section"]}>
          <h5>Our Company</h5>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Product & Services</li>
            <li>Client</li>
          </ul>
        </section>
        <section className={design["last-section"]}>
          <h5>Contact Us</h5>
          <a> Email: Courageobunike@gmail.com</a>
          <a>Phone: +234 904 985 4437</a>

          <div className={design["icon-section"]}>
            <h5>Follow Us On</h5>
            <div className={design["icons"]}>
              <a href="">
                <img src={Linkedin} alt="Linkedin" />
              </a>
              <a href="">
                <img src={Facebook} alt="Facebook" />
              </a>
              <a href="">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="">
                <img src={X} alt="X Former Twitter" />
              </a>
              <a href="">
                <img src={Youtube} alt="Youtube" />
              </a>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};
