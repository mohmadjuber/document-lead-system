import React from 'react';
import Header from './Header';
import Footer from './Footer';
import EnquiryForm from './EnquiryForm';

const withLayout = C => () => {
    return(
        <>
            <Header></Header>
            <EnquiryForm></EnquiryForm>
            <C></C>
            <Footer></Footer>
        </>
    )
}

export default withLayout;
