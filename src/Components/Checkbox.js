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
    }
`; 
const Checkbox = ({id}) => {
    return(
        <CheckboxWrapper>
            <input type="checkbox" id = {id} />
        </CheckboxWrapper>
    );
    
}

export default Checkbox;