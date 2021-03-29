import React from 'react';
import styled from 'styled-components';

const CheckboxWrapper = styled.div`
    width:20px;
    height:20px;
    padding-right:5px;
    margin-bottom:10px;
    input {
        margin:0;
        width:100%;
        height:100%;
        box-shadow: 2px 2px 5px #888888;
        border:1px solid;
    }
    input:hover {
        box-shadow: -2px 2px 8px #888888;
    }
`; 
const Checkbox = ({id, label_name, htmlfor}) => {
    return(
        <CheckboxWrapper>
            <input type="checkbox" id = {id} />
        </CheckboxWrapper>
    );
    
}

export default Checkbox;