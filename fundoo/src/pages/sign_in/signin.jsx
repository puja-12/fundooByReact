import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './form.css'
import { useState } from 'react';
import { login } from '../../sevices/userService';
import { useNavigate } from 'react-router-dom';
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function Signin() {
    const navigate=useNavigate()
    const [signinObj, setSigninObj] = useState ({email:"",password:""}) 
    const [regexObj,setRegexObj] = useState ({emailBorder:false,emailHelper:"",passwordBorder:false,passwordHelper:""})
    const takeUserName=(event) => {
        setSigninObj(prevState => ({
            ...prevState,
            email: event.target.value
        })) 
        console.log(event.target.value)
    }
    const takePassword=(event) => {
        setSigninObj(prevState => ({
            ...prevState,
            password: event.target.value
        })) 
        console.log(event.target.value)

    }
    const submit = () => {
        let emailTest=emailRegex.test(signinObj.email)
        let passwordTest=passwordRegex.test(signinObj.password)
        if (emailTest===false) {
            setRegexObj(prevState => ({
                ...prevState,
                emailBorder:true,
                emailHelper:"enter valid emails"
            }))
        }
        else if (emailTest===true){
            setRegexObj(prevState => ({
                ...prevState,
                emailBorder:false,
                emailHelper:""
            }))
        
        }
        if (passwordTest===false) {
            setRegexObj(prevState => ({
                ...prevState,
                passwordBorder:true,
                passwordHelper:"incorrect password"
            }))
        }
        else if (passwordTest===true){
            setRegexObj(prevState => ({
                ...prevState,
                passwordBorder:false,
                passwordHelper:""
            }))
        
        }
        console.log(signinObj)
        if(emailTest===true && passwordTest===true){
            login(signinObj).then((response) => {
                console.log(response);
                localStorage.setItem("token",response.data.id)
                navigate('/dashboard')


            })
            .catch((error) => {
                console.log(error)
            })
            console.log("login success")

        }
    }
    const createAccount=()=>{
        navigate('/signup')
    }
    
    return (
    
            <div class="signinContainer">
                <div class="container1">
                <div class="child1"> <img src='images/logo.png' style={{ width: "100px", height: "50px", flexDirection: "column" }} /> </div>
                    <div class="child2"><h2> Sign in </h2></div>
                    <div class="child3"> <h3>Use your Google Account</h3> </div>
                </div>
                <div class="container2">
                
                <TextField fullWidth label="Email or phone" id="Email" autoComplete='off' onChange={takeUserName} error={regexObj.emailBorder} helperText={regexObj.emailHelper}/>
                        <a>Forgot email?</a>
                       
                <TextField fullWidth label="Password" id="Password"  onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper}/>
                    <div class="child4">
                        Not your computer? Use Guest mode to sign in privately <br />
                        <a href=" " >Learn More</a>
                    </div>
                    <div class="child5">
                        <Button variant="text" onClick={createAccount}>Create account</Button>

                        <Button variant="contained" onClick={submit}>Next</Button>
                    </div>
                </div>
            </div>
        
    )
}

export default Signin