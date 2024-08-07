import styles from './styles.module.css';

export const ForgotPassword = () => {
  return (
    <div className={styles.fpassword}>
        <div className={styles.box1}>
            <form>
                <p className={styles.title}>Forgot Password?</p>
                <p>Email</p>
                <input type="text" className={styles.textfield} placeholder='Enter your email'/>
                <button className={styles.sendbtn}>Send</button>
            </form>            
        </div>    
    </div>
  )
}
