import styles from "./style.module.css";
import schoolchild from "../../assets/schoolchild.png";
import { Button } from "../../components/button";
// import union from "../../assets/union.png";

export const Login = () => {
  return (
    <div className={styles.container}>
      <section className={styles["left-section"]}>
        <div className={styles["form-section"]}>
          <form action="submit">
            <div className={styles.headersection}>
              <h1>Welcome 🤗</h1>
            </div>
            <div className={styles.label}>
              <label htmlFor="username"> Username </label>

              <input
                className={styles.inputtext}
                type="text"
                placeholder="Enter email/Username"
                id="name"
                name="name"
                required
              />
            </div>

            {/* This is the label for Password  */}

            <div className={styles.label}>
              <label htmlFor="email">Password </label>
              <input
                className={styles.inputtext}
                type="email"
                placeholder="Enter password"
                id="email"
                name="email"
                required
              />
              {/* <img src={union} alt="show-password"/>  */}
            </div>

            <p className={styles.forgotpassword}>Forgot password?</p>
            <div className={styles.buttonsection}>
              <Button content="Login" className={styles.btn} />
            </div>
          </form>
        </div>
      </section>
      <section className={styles["right-section"]}>
        <div className={styles.imagecontainer}>
          <img
            className={styles.image}
            src={schoolchild}
            alt="schoolchild and teacher"
          />
        </div>
      </section>
    </div>
  );
};
