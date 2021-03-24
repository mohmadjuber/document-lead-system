import React from 'react';
import styled from 'styled-components';

const EnquiryWrapper = styled.div`
    font-size:1.5em;
    width:50%;
    position: fixed;
    top: 50px;
    background: #9fff90;
    height:100%;
    right: 0;
`;
const submitForm = () => {
    console.log("Success pe le jao")
}
const EnquiryForm = () => {
    return(
        <EnquiryWrapper>
            <h2>Enquiry form</h2>
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
                        <input type="checkbox" id="pan"></input><label for="pan">PAN Card</label>
                        <input type="checkbox" id="aadhar"></input><label for="aadhar">AADHAR Card</label>
                        <input type="checkbox" id="passport"></input><label for="passport">Passport</label>
                        <input type="checkbox" id="gumasta"></input><label for="gumasta">Gumasta License</label>
                        <input type="checkbox" id="udyam"></input><label for="udyam">Udyam Certificate</label>
                        <input type="checkbox" id="income_certificate"></input><label for="income_certificate">Income Certificate</label>
                        <input type="checkbox" id="income_tax_file"></input><label for="income_tax_file">Income Tax File</label>
                        <input type="checkbox" id="food_license"></input><label for="food_license">Food License</label>
                        <input type="checkbox" id="police_clearance_certificate"></input><label for="police_clearance_certificate">Police Clearance Certificate(PCC)</label>
                        <input type="checkbox" id="pf_withdraw_services"></input><label for="pf_withdraw_services">PF Withdraw Services</label>
                        <input type="checkbox" id="gazzettes"></input><label for="gazzettes">Gazzettes</label>
                    </div>
                    <div className="submit-button">
                        <button onClick={submitForm()}>Submit</button>
                    </div>
                </form>
            </div>
        </EnquiryWrapper>
    );
}

export default EnquiryForm;