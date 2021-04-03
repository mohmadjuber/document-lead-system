import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const LinkWrapper = styled.div`
    display:flex;
    flex-direction: row;
    align-items: right;
    width:20%;
    justify-content: space-between;
    margin-right:20px;
    a {
        font-size:16px;
        margin: 15px 0;
        color:#000;
        text-decoration: none;
    }
    a:hover {
        text-shadow: 0px 0px 1px #000;
    }
`;
const LinkNav = () => {
    return(
        <LinkWrapper>
            <Link to={'/thankyou'}>Link 1</Link>
            <Link to={'/thankyou'}>Link 2</Link>
            <Link to={'/thankyou'}>Link 3</Link>
            <Link to={'/thankyou'}>Link 4</Link>
        </LinkWrapper>
    )
}

export default LinkNav;