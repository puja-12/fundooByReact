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
export const postNotes=(noteObject)=> {
   let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes',noteObject,headerConfig)
    return response
}
export const archieveNotes=(noteObject)=> {
   let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes',noteObject,headerConfig)
    return response
}
export const updateColor=(noteObject)=> {
   let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes',noteObject,headerConfig)
    return response
}
export const updateNotes=(noteObject)=> {
   let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes',noteObject,headerConfig)
    return response
}
export const trashNotes=(noteObject)=> {
   let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes',noteObject,headerConfig)
    return response
}