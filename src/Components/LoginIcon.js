import React, { useState } from 'react';
import {FaUser} from 'react-icons/fa';
import LoginModal from './LoginModal';

const LoginIcon = () => {
    const [showModal, setmodal] = useState(false);
    const handleModal = () => {
        setmodal(true);
    }
    
    return(
        <>
            <button onClick={handleModal}><FaUser /></button>
            {showModal ? <LoginModal hide={showModal}></LoginModal> : null}
        </>
    )
}
export default LoginIcon;