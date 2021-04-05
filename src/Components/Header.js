import React from 'react';
import LogoImage from './LogoImage';
import LinkNav from './LinkNav';
import LoginIcon from './LoginIcon';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    font-size:1.5em;
    width:100%;
    height:50px;
    line-height: 1;
    position: fixed;
    top: 0;
    background: #fff;
    display:flex;
    justify-content: space-between;
    span{
        margin-top:10px;
    }
`;

const Header = () => {
    return(
        <>
        <HeaderWrapper>
            <LogoImage></LogoImage>
            <LinkNav></LinkNav>
            <LoginIcon></LoginIcon>
        </HeaderWrapper>
        </>
    )
}

export default Header;