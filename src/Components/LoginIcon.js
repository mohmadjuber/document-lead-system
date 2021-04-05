import React from 'react';
import {FaUser} from 'react-icons/fa';

const LoginIcon = () => {
    const showModal = () => {
        alert("Popup clicked");
    }
    return(
        <>
            <button onClick={showModal}><FaUser /></button>
        </>
    )
}
export default LoginIcon;