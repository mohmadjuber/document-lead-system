import React from "react";
import styled from "styled-components";

const InputTextWrapper = styled.div`
    width:90%;
    margin:5%;
    input {
        width:90%;
        border: 1px solid;
        padding:10px;
        box-shadow: 5px 5px 8px #888888;
    }
    input:hover {
        box-shadow: 7px 7px 8px #888888;
    }
`;
const InputText = (props) => {
    
//let error = false;
    const handleChange = (event) => {
        props.onchange(event.target.value);
        // if(event.target.value === '' || event.target.value === undefined){
        //         error = true;
        //     console.log("Error", error);
        // }
    }
    return(
        <InputTextWrapper>
            <input type="text" placeholder= {props.placeholder} onChange={handleChange} required/>
        </InputTextWrapper>
    );
}

export default InputText;