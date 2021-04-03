import React from 'react';
import logo from '../logo.svg';
import styled from 'styled-components';

const LogoImageWrapper = styled.div`
    width:150px;
    height:100%;
    background: url(${logo}) no-repeat center left;
    span {
        margin: 10px 0 10px 60px;
        display:block;
    }
`;
const LogoImage = () => {
    return(
        <LogoImageWrapper>
            <span>FASTDOC</span>
        </LogoImageWrapper>
    );
}

export default LogoImage;