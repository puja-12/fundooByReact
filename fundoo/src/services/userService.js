import axios from "axios"

export const login=(loginObj) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login",loginObj)
    console.log("login in process")
    return response
}
// export const signUp = async (signupobj) => {
//     let response =  axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp", signupobj)
//     console.log(" processing")
//     return response;
// }