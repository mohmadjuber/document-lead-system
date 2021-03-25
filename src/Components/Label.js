import React from 'react';
import styled from 'styled-components';

const LabelWrapper = styled.div`
    font-size:12px;
    text-align:left;
    padding-top:3px;
    width:40%;
    margin-right: 5px;
`;
const Label = ({name, htmlFor}) => {
    return(
        <LabelWrapper>
            <label htmlFor={htmlFor}>{name}</label>
        </LabelWrapper>
    );
}

export default Label;