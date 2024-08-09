import styles from './styles.module.css';
import { Link } from "react-router-dom";
import { closeicon, successicon } from '../../assets';


// Success Modal Component
export const SuccessModal = ({ isVisible, onClose }) => {
    
    if (!isVisible) return null;  
    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <img src={closeicon} alt="closeicon" onClick={onClose} className={styles.closeButton}/>
          <img src={successicon} alt="" />        
          <p className={styles.title}>Successful!</p>
          <p>Your password has successfully changed.</p>
          <Link to = '/login'>
              <button className={styles.goback}>Go back to login</button>
          </Link>
        </div>
      </div>
    );
  };
