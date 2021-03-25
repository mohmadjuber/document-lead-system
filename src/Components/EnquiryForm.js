import React from 'react';
import Label from './Label';
import styled from 'styled-components';
import InputText from './InputText';
import Checkbox from './Checkbox';

const EnquiryWrapper = styled.div`
    width:50%;
    margin-top:50px;
    overflow: auto;
    top: 50px;
    padding-top:20px;
    background: #9fff90;
    min-height:100%;
    right: 0;
    h2 {
        margin-bottom:20px;
    }
    form {
        display:flex;
        flex-direaction: row
    }
    .user-details {
        width:50%;
        .user-address{
            width:90%;
            margin:5%;
            textarea {
                width:97%;
            }
        }
        
    }
    .docs-options {
        width:46%;
        display: flex;
        flex-wrap: wrap;
        border-left:2px solid #000;
        padding:0 2%;
        div {
            margin-bottom:10px;
            text-align: left;
        }
    }
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
                    <div className='user-details'>
                        <div className='first-name'>
                            <InputText placeholder="First Name"/>
                        </div>
                        <div className='last-name'>
                            <InputText placeholder="Last Name"/>
                        </div>
                        <div className="user-mobile">
                            <InputText placeholder='Mobile Number' />
                        </div>
                        <div className="user-address">
                            <textarea rows='6' cols="20" placeholder='Enter your address' />
                        </div>
                    </div>
                    <div className="docs-options">
                        <div>Please select the required documents from below list:</div>
                        
                        <Checkbox id="pan"></Checkbox>
                        <Label name='PAN Card' htmlFor="pan"></Label>
                        
                        <Checkbox id="aadhar"></Checkbox>
                        <Label name='AADHAR Card' htmlFor="aadhar"></Label>
                        
                        <Checkbox id="passport"></Checkbox>
                        <Label name='Passport' htmlFor="passport"></Label>
                        
                        <Checkbox id="gumasta"></Checkbox>
                        <Label name='Gumasta License' htmlFor="gumasta"></Label>
                        
                        <Checkbox id="udyam"></Checkbox>
                        <Label name='Udyam Certificate' htmlFor="udyam"></Label>
                        
                        <Checkbox id="income_certificate"></Checkbox>
                        <Label name='Income Certificate' htmlFor="income_certificate"></Label>
                        
                        <Checkbox id="income_tax_file"></Checkbox>
                        <Label name='Income Tax File' htmlFor="income_tax_file"></Label>
                        
                        <Checkbox id="food_license"></Checkbox>
                        <Label name='Food License' htmlFor="food_license"></Label>
                        
                        <Checkbox id="police_clearance_certificate"></Checkbox>
                        <Label name='Police Clearance Certificate(PCC)' htmlFor="police_clearance_certificate"></Label>
                        
                        <Checkbox id="pf_withdraw_services"></Checkbox>
                        <Label name='PF Withdraw Services' htmlFor="pf_withdraw_services"></Label>
                        
                        <Checkbox id="gazzettes"></Checkbox>
                        <Label name='Gazzettes' htmlFor="gazzettes"></Label>

                        <Checkbox id="pan"></Checkbox>
                        <Label name='PAN Card' htmlFor="pan"></Label>
                        
                        <Checkbox id="aadhar"></Checkbox>
                        <Label name='AADHAR Card' htmlFor="aadhar"></Label>
                        
                        <Checkbox id="passport"></Checkbox>
                        <Label name='Passport' htmlFor="passport"></Label>
                        
                        <Checkbox id="gumasta"></Checkbox>
                        <Label name='Gumasta License' htmlFor="gumasta"></Label>
                        
                        <Checkbox id="udyam"></Checkbox>
                        <Label name='Udyam Certificate' htmlFor="udyam"></Label>
                        
                        <Checkbox id="income_certificate"></Checkbox>
                        <Label name='Income Certificate' htmlFor="income_certificate"></Label>
                        
                        <Checkbox id="income_tax_file"></Checkbox>
                        <Label name='Income Tax File' htmlFor="income_tax_file"></Label>
                        
                        <Checkbox id="food_license"></Checkbox>
                        <Label name='Food License' htmlFor="food_license"></Label>
                        
                        <Checkbox id="police_clearance_certificate"></Checkbox>
                        <Label name='Police Clearance Certificate(PCC)' htmlFor="police_clearance_certificate"></Label>
                        
                        <Checkbox id="pf_withdraw_services"></Checkbox>
                        <Label name='PF Withdraw Services' htmlFor="pf_withdraw_services"></Label>
                        
                        <Checkbox id="gazzettes"></Checkbox>
                        <Label name='Gazzettes' htmlFor="gazzettes"></Label>
                        
                    </div>
                    {/* <div className="submit-button">
                        <button onClick={submitForm()}>Submit</button>
                    </div> */}
                </form>
            </div>
        </EnquiryWrapper>
    );
}

export default EnquiryForm;