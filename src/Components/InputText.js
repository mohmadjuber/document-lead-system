import React from "react";
import styled from "styled-components";

const InputTextWrapper = styled.div`
    width:90%;
    margin:5%;
    input {
        width:97%;
    }
`;
const InputText = ({placeholder}) => {
    return(
        <InputTextWrapper>
            <input type="text" placeholder= {placeholder} />
        </InputTextWrapper>
    );
}

export default InputText;