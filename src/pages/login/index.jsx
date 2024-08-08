import styles from "./style.module.css";
import schoolchild from "../../assets/schoolchild.png";
// import union from "../../assets/union.png";

export const Login = () => {
  return (
    <div className={styles.container}>
      <section className={styles["left-section"]}>
        <div className={styles["form-section"]}>
          <form action="submit">
            <h1>Welcome 🤗</h1>
            <label htmlFor="username"> Username </label>
            <br></br>
            <input
              type="text"
              placeholder="Enter email/Username"
              id="name"
              name="name"
              required
            ></input>
            <br></br>

            <label htmlFor="email">Email</label>
            <br></br>
            <input
              type="email"
              placeholder="Enter password"
              id="email"
              name="email"
              required
            ></input>
            <br></br>
            {/* <img src={union} alt="show-password" /> */}

            <p className={styles.forgotpassword}>Forgot password?</p>

            <button className={styles.bluebutton} type="submit">
              Login
            </button>
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
