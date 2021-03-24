import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.h1`
    font-size:1.5em;
    width:100%;
    height:50px;
    line-height: 1;
    position: fixed;
    top: 0;
    background: #fff;
`;

const Header = () => {
    return(
        <>
        <HeaderWrapper>Header</HeaderWrapper>
        </>
    )
}

export default Header;