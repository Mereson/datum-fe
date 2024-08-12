import styles from './styles.module.css';
import { Link } from "react-router-dom";

export const ForgotPassword = () => {
  return (
    <div className={styles.fpassword}>
        <div className={styles.box1}>
            <form>
                <p className={styles.title}>Forgot Password?</p>
                <p>Email</p>
                <input type="text" className={styles.textfield} placeholder='Enter your email'/>
                <Link to = '/forgotpassword2'>
                    <button className={styles.sendbtn}>Send</button>
                </Link>
            </form>            
        </div>    
    </div>
  )
}
