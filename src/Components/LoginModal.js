import React from 'react';
import InputText from './InputText';
import styled from 'styled-components';

const LoginModalWrapper = styled.div`
    width:100vw;
    height:100vh;
    background:#000;
    position:fixed;
    top:0;
    .modal-container {
        width:250px;
        height:250px;
        background:#fff;
        position:absolute;
        top:25%;
        left:40%;
        display:flex;
        justify-content: center;
        align-items:center;
        flex-direction:column;
        button.close {
            width:20px;
            height:20px;
            background:#fff;
            border:none;
            position:absolute;
            top:0;
            right:0;
            font-size:16px;
        }
        button.close:hover {
            color:#000099;
        }
        .modal-content {
            align-self: center;
            button {
                margin: 20px auto;
                padding:10px;
                font-size:16px;
                background: #ffffff;
                box-shadow: 5px 5px 10px #888888;
                color:green
            }
            button:hover {
                background: #fffeee;
                color:#000;
                box-shadow: 7px 7px 8px #888888;
            }
        }
    }
`;
const LoginModal = (props) => {
    return(
        <LoginModalWrapper>
            <div className="modal-container">
                <button className="close" onClick={!props.hide}>X</button>
                <div className="modal-content">
                    <form>
                        <InputText placeholder="Enter Your Mobile Number"></InputText>
                        <button type="submit">Verify</button>
                    </form>
                </div>
            </div>
        </LoginModalWrapper>
    )
}

export default LoginModal;