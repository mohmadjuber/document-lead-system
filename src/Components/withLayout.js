import React from 'react';
import Header from './Header';
import Footer from './Footer';
import EnquiryForm from './EnquiryForm';
import styled from 'styled-components';

const WithLayoutWrapper = styled.div`
    display:flex;
    width:100%;
    flex-direction:row;
    flex-wrap:wrap;
`;

const withLayout = C => () => {
    return(
        <WithLayoutWrapper>
            <Header></Header>
            <C></C>
            <EnquiryForm></EnquiryForm>
            <Footer></Footer>
        </WithLayoutWrapper>
    )
}

export default withLayout;
