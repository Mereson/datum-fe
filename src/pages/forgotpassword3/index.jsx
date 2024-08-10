import styles from './styles.module.css';
import { Link } from "react-router-dom";
import { LuEye, LuEyeOff } from "react-icons/lu";
import React, { useState } from 'react';
import { SuccessModal } from '../../components';


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
