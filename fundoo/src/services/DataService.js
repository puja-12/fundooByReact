import axios from "axios";

const headerConfig ={
 headers:{
    Authorization: localStorage.getItem('token')
 }
}

export const getNotesList=()=> {
    let response = axios.get('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList',headerConfig)
     return response
}