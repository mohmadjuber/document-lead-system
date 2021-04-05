import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
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
    .form-wrapper {
        display:flex;
        flex-direaction: row
    }
    .user-details {
        width:50%;
        input {
            width:85%;
            border: 1px solid;
            padding:10px;
            margin-bottom:20px;
            box-shadow: 5px 5px 8px #888888;
        }
        input:hover {
            box-shadow: 7px 7px 8px #888888;
        }
        .user-address{
            width:95%;
            margin:5% auto;
            textarea {
                width:90%;
                border: 1px solid;
                padding:10px;
                box-shadow: 5px 5px 8px #888888;
            }
            textarea:hover {
                box-shadow: 7px 7px 8px #888888;
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
            margin-bottom: 10px;
            text-align: left;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
        label {
            min-width:48%;
            margin-bottom:10px;
            span {
                display:block;
                margin-top:-5px;
            }
        }
        input {
            width:20px;
            height:20px;
            border: 1px solid;
            box-shadow: 2px 2px 5px #888888;
        }
        input:hover {
            box-shadow: -2px 2px 8px #888888;
        }
    }
    .danger{
        color:#ff0000;
        padding-bottom:5px;
    }
    .submit-button button{
        margin: 20px auto;
        padding:10px;
        font-size:16px;
        background: #ffffff;
        box-shadow: 5px 5px 8px #888888;
        border:none;
        color:green
    }
    .submit-button button:hover {
        background: #fffeee;
        color:#000;
        box-shadow: 7px 7px 8px #888888;
    }
`;

const phoneRegExp = /^([0-9]{10})$/;


const EnquiryForm = () => {
    const history = useHistory();
    return(
        <EnquiryWrapper>
            <h2>Enquiry form</h2>
            <div>
                <Formik
                    initialValues={{ fullName: '', mobile: '', address: '', documents: [] }}
                    validationSchema={Yup.object({
                    fullName: Yup.string()
                    .min(6, <div className="danger">Please Enter the full name</div>)
                    .required(<div className="danger">Please Enter the full name</div>),
                    mobile: Yup.string().matches(phoneRegExp, <div className="danger">Mobile number is not valid</div>)
                    .required(<div className="danger">Please enter the mobile number</div>),
                    address: Yup.string().required(<div className="danger">Please enter the address</div>),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    //alert("values", JSON.parse(values));
                    setSubmitting(false);
                    history.push('/thankyou')
                    }, 400);
                    
                }}
                >
                    <Form>
                        <div class="form-wrapper">
                            <div className='user-details'>
                                <div className='first-name'>
                                    <Field name="fullName" type="text" placeholder="Enter Your Full Name"/>
                                    <ErrorMessage name="fullName" />
                                </div>
                                <div className="user-mobile">
                                    <Field name="mobile" type="text" maxLength="10" placeholder="Enter Your Mobile Number"/>
                                    <ErrorMessage name="mobile" />
                                </div>
                                <div className="user-address">
                                    <Field name="address" component="textarea" rows='7' cols='16' placeholder="Enter Your Address" />
                                    <ErrorMessage name="address" />
                                </div>
                            </div>           
                            <div className="docs-options">
                                <div id="checkbox-group">Please select the required documents from below list:</div>
                                <div role="group" aria-labelledby="checkbox-group">
                                    <label>
                                        <Field type="checkbox" name="documents" value="pan_card" />
                                        PAN Card
                                    </label>
                                    <label>
                                        <Field type="checkbox" name="documents" value="aadhar_card" />
                                        AADHAR Card
                                    </label>
                                    <label>
                                        <Field type="checkbox" name="documents" value="passport" />
                                        Passport
                                    </label>
                                    <label>
                                        <Field type="checkbox" name="documents" value="gumasta_license" />
                                        Gumasta License
                                    </label>
                                    <label>
                                        <Field type="checkbox" name="documents" value="udyam_certifiate" />
                                        Udyam Certificate
                                    </label>
                                    <label>
                                        <Field type="checkbox" name="documents" value="income_certificate" />
                                        Income Certificate
                                    </label>
                                    <label>
                                        <Field type="checkbox" name="documents" value="income_tax_file" />
                                        Income Tax File
                                    </label>
                                    <label>
                                        <Field type="checkbox" name="documents" value="food_license" />
                                        Food License
                                    </label>
                                    <label>
                                        <Field type="checkbox" name="documents" value="police_clearance_certificate" />
                                        Police Clearance Certificate(PCC)
                                    </label>
                                    <label>
                                        <Field type="checkbox" name="documents" value="pf_withdraw_services" />
                                        PF Withdraw Services
                                    </label>
                                    <label>
                                        <Field type="checkbox" name="documents" value="gazzettes" />
                                        Gazzettes
                                    </label>
                                </div>
                                <ErrorMessage name="documents" />
                            </div>
                        </div>
                        <div className="submit-button">
                            <button>Submit</button>
                        </div>
                    </Form>
                </Formik>
             </div>
        </EnquiryWrapper>
    );
}

export default EnquiryForm;