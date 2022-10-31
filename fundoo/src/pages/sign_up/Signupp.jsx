import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import './signupp.css'
import { signUp } from '../../sevices/userService';
const firstNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lastNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const confirmPasswordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function Signupp() {

    const [signUpObj, setSignUpObj] = useState({ firstName: "", lastName: "", email: "", password: "",service: "advance"});

    const [regexObj, setRegexObj] = useState({
        firstNameBorder: false,
        lastNameBorder: false,
        emailBorder: false,
        passwordBorder: false,
        confirmBorder: false,
        firstNameHelper: "",
        lastNameHelper: "",
        emailHelper: "",
        passwordHelper: "",
        confirmHelper: "",
    });


    const takeFirstName = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, firstName: event.target.value }))
    }
    const takeLastName = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, lastName: event.target.value }))
    }
    const takeEmail = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, email: event.target.value }))
    }
    const takePassword = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, password: event.target.value }))
    }
    const takeConfirm = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, password: event.target.value }))
    }

    const submit = () => {
        const firstNameTest = firstNameRegex.test(signUpObj.firstName);
        const lastNameTest = lastNameRegex.test(signUpObj.lastName);
        const emailTest = emailRegex.test(signUpObj.email);
        const passwordTest = passwordRegex.test(signUpObj.password);
        const confirmTest = confirmPasswordRegex.test(signUpObj.password);
        console.log(firstNameTest, lastNameTest, emailTest, passwordTest, confirmTest);


        if (firstNameTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                firstNameBorder: true,
                firstNameHelper: "Invalid First Name",
            }));
        } else if (firstNameTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                firstNameBorder: false,
                firstNameHelper: "",
            }));
        }
        if (lastNameTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                lastNameBorder: true,
                lastNameHelper: "Invalid Last Name",
            }));
        } else if (lastNameTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                firstNameBorder: false,
                firstNameHelper: "",
            }));
        }
        if (emailTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                emailBorder: true,
                emailHelper: "Invalid Email",
            }));
        } else if (emailTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                emailBorder: false,
                emailHelper: "",
            }));
        }
        if (passwordTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                passwordBorder: true,
                passwordHelper: "Password must have 8characters",
            }));
        } else if (passwordTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                passwordBorder: false,
                passwordHelper: "",
            }));
        }
        if (confirmTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                confirmBorder: true,
                confirmHelper: "Password and ConfirmPassword must be same",
            }));
        } else if (confirmTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                confirmBorder: false,
                confirmHelper: "",
            }));
        }
        if (firstNameTest === true && emailTest === true && passwordTest === true )
        {
            signUp(signUpObj).then((response) => {
                console.log(response);

            })
            .catch((error) => {
                console.log(error)
            })
            console.log("successfully created")

        }

    
    }


  return (
    <div>
            <div class="Header">
                <div class="table1">
                    <div class="box1"> <img src='images/logo.png' style={{ width: "100px", height: "60px", flexDirection: "flex-start" }} /> </div>
                    <div class="box2">
                        Create your Google Account
                    </div>
                    <div class="box3">
                    <TextField id="First name" label="First name"  size="small"  onChange={takeFirstName} error={regexObj.firstNameBorder} helperText={regexObj.firstNameHelper}/>
                    <TextField id="Last name" label="Last name"   size="small"  onChange={takeLastName} error={regexObj.lastNameBorder} helperText={regexObj.lastNameHelper}/>
                   
                   </div>
                    <TextField fullWidth label="Email or phone" id="Email" autoComplete='off'  size="small"   onChange={takeEmail}
                            error={regexObj.emailBorder}
                            helperText={regexObj.emailHelper}/>
                            
                    <span>
                    You can use letters, numbers & periods
                    </span>
                    <br></br>
                    <a href="#">Use my current email address instead</a>
                   
                
                    <div class="box6">
                    <TextField id="Password" label="Password"  size="small" onChange={takePassword}  
                            error={regexObj.passwordBorder}
                            helperText={regexObj.passwordHelper}/>
                          <TextField id="Confirm" label="Confirm" size="small" onChange={takeConfirm}
                            error={regexObj.confirmBorder}
                            helperText={regexObj.confirmHelper}/>
                    </div>
                    <div class="box7">
                        <input type="checkbox" />
                        &nbsp;Show password
                    </div>
                    <div class="box8">
                    <Button variant="text">Create account</Button>
                        <Button variant="contained" onClick={submit}>Next</Button>
                    </div>
                </div>
                <div class="table2">
                    <div class="tbox1"><img src='images/account.svg' /></div>
                    <div class="tbox2"><p>One account. All of Google working for you.</p></div>
                </div>
            </div>
        </div>
    )
}

export default Signupp

