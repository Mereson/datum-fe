import styles from "./style.module.css"
import schoolchild from "../../assets/schoolchild.png"
import { Button } from "../../components/button"
import { Link } from "react-router-dom"
import { LuEye, LuEyeOff } from "react-icons/lu"
import { useState } from "react"

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  // Funtion for the shoW and hide password
  const showeye = () => {
    setShowPassword(!showPassword)
  }

  return (
    <section className={styles.login_container}>
      <div className={styles.login}>
        <div className={styles.login_left}>
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

            {/* This is the label for Password */}

            <div className={styles.label}>
              <label htmlFor="email">Password </label>

              <div className={styles.hide} onClick={showeye}>
                <input
                  className={styles.inputtext}
                  type={showPassword ? "password" : "text"}
                  placeholder="Enter password"
                  id="email"
                  name="email"
                  required
                />
                {showPassword ? (
                  <LuEyeOff onClick={showeye} className={styles.hideicon} />
                ) : (
                  <LuEye onClick={showeye} className={styles.hideicon} />
                )}
              </div>
            </div>

            <Link to="/forgotpassword">
              <p className={styles.forgotpassword}>Forgot password?</p>
            </Link>
            <div className={styles.buttonsection}>
              <Button
                link={"/students/dashboard"}
                content="Login"
                className={styles.btn}
              />
            </div>
          </form>
        </div>

        <div className={styles.login_right}>
          <figure className={styles.imagecontainer}>
            <img
              className={styles.image}
              src={schoolchild}
              alt="schoolchild and teacher"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
