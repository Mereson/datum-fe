import styles from './styles.module.css';
import { Link } from "react-router-dom";
import { LuEye, LuEyeOff } from "react-icons/lu";
import React, { useState } from 'react';
import { closeicon, successicon } from '../../assets';

// Success Modal Component
const SuccessModal = ({ isVisible, onClose }) => {
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

export const ForgotPassword3 = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Function to show the success modal
    const handleResetPassword = (event) => {
        event.preventDefault(); // Prevent the default form submission
        setIsModalVisible(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <div className={styles.fpassword}>
            <div className={styles.box1}>
                <form onSubmit={handleResetPassword}>
                    <p className={styles.title}>Set new password</p>
                    <p className={styles.desc}>Create a new password to secure your account.</p>
                    <div className={styles.fields}>
                        <input 
                            type={showPassword ? 'text' : 'password'} 
                            className={styles.textfield} 
                            placeholder='Enter new password' 
                        />
                        <div 
                            className={styles.hide} 
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <LuEye /> : <LuEyeOff />}
                        </div>
                    </div>
                    <div className={styles.fields}>
                        <input 
                            type={showPassword ? 'text' : 'password'} 
                            className={styles.textfield} 
                            placeholder='Confirm password'
                        />
                        <div 
                            className={styles.hide} 
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <LuEye /> : <LuEyeOff />}
                        </div>
                    </div>
                    <button type="submit" className={styles.sendbtn}>Reset password</button>
                </form>
            </div>

            <SuccessModal isVisible={isModalVisible} onClose={closeModal} />
        </div>
    );
};
