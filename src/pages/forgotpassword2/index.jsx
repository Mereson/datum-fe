import styles from './styles.module.css';
import { Link } from "react-router-dom";

export const ForgotPassword2 = () => {
  return (
    <div className={styles.fpassword}>
        <div className={styles.box1}>
            <form>
                <p className={styles.title}>Enter verification code</p>
                <p className={styles.desc}>Check your email for the verification code, enter the 4 digits sent to you.</p>
                <div className={styles.otps}>
                    <input type="text" className={styles.otpfield} />
                    <input type="text" className={styles.otpfield} />
                    <input type="text" className={styles.otpfield} />
                    <input type="text" className={styles.otpfield} />
                </div>
                <p>00 : 30</p>
                <div className={styles.resend}>Didn't recieve a code? <span>Resend code</span></div>
                <Link to = '/forgotpassword3'>
                    <button className={styles.sendbtn}>Verify</button>
                </Link>
            </form>            
        </div>    
    </div>
  )
}
