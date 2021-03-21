import React from 'react';
import { Redirect } from 'react-router-dom';
const submitForm = () => {
    console.log("Success pe le jao")
}
const EnquiryForm = () => {
    return(
        <>
            <h1>Enquiry form</h1>
            <div>
                <form>
                    <div className='user-name'>
                        <label>First Name</label>
                        <input type='text' placeholder="First Name"/>
                        <label>Last Name</label>
                        <input type='text' placeholder="Last Name"/>
                    </div>
                    <div className="user-mobile">
                        <label>Mobile Number:</label>
                        +91<input type='text' placeholder='Mobile Number' />
                    </div>
                    <div className="user-address">
                        <label>Address:</label>
                        <textarea rows='4' cols="80" placeholder='Enter your address' />
                    </div>
                    <div class="docs-options">
                        <div>Please select the required documents from below list:</div>
                        <input type="checkbox" id="pan"></input><label for="pan">PAN</label>
                        <input type="checkbox" id="aadhar"></input><label for="aadhar">AADHAR</label>
                    </div>
                    <div className="submit-button">
                        <button onClick={submitForm()}>Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default EnquiryForm;