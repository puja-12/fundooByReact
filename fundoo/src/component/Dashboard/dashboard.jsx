import React, { useState,useEffect } from 'react'
import Header from '../Header/header'
import TakeNote1 from '../Takenote1/takenote1'
import TakeNote2 from '../Takenote2/takenote2'
import Takenote3 from '../Takenote3/takenote3'
import { getNotesList } from '../../services/DataService'


function Dashboard() {
  const [toggle, setToggle] = useState(false)
  const listenTotakeNote1 = () => {
    setToggle(true)

  }
  const [notelist, setNotelist] = useState([])
 


  useEffect(() => {
    getNotesList().then((response) => {
      console.log(response)
      setNotelist(response.data.data.data)


    })
      .catch((error) => 
        console.log(error)
      )
  
  }, [])

  function closeNote2() {
    setToggle(false)
  }

  return (
    <div>
      <Header />
      <div>
        {
          toggle ? <TakeNote2 closeNote2={closeNote2} /> : <TakeNote1 listenTotakeNote1={listenTotakeNote1} />

        }
        <div style = {{width:'70vw',height:'40vh',display:'flex',flexDirection:'row',position:'relative',left:'420px',top:'80px'}}>
          {
            notelist.map((note) => (<Takenote3 note={note} />))
          }
        </div>


      </div>

    </div>
  )
}


export default Dashboard



