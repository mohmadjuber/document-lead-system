import React from 'react';
import {
    Switch,
    Route
  } from 'react-router-dom';
  import EnquiryForm from './EnquiryForm';
  import Home from './Home';
  import ThankYou from './ThankYou';
  
const AppRoutes = () => {
    return(
        <>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/enquiry' component= {EnquiryForm} />
                <Route path='/thankyou' component= {ThankYou} />
                <Route component= {Home} />
            </Switch>
        </>
    );
}

export default AppRoutes;