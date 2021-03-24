import React from 'react';
import logo from '../logo.svg';
import styled from 'styled-components';

const  HomeWrapper = styled.div`
    width:50%;
`;
const Home = () => {
    return(
        <HomeWrapper>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </HomeWrapper>
    );
}
export default Home;