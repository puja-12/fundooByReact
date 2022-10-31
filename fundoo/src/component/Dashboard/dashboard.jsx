import React, { useState, useEffect } from 'react'
import { getNotesList } from '../../sevices/dataServices'
import AppBarOne from '../AppBar/appBar'
import DrawerOne from '../drawer/drawer'
import Header from '../header'
import TakeNote1 from '../takenote1/takenote1'
import TakeNote2 from '../takenote2/takenote2'
import Takenote3 from '../takenote3/takenote3'


function Dashboard() {

  const [toggle, setToggle] = useState(false)
  const listenTotakeNote1 = () => {
    setToggle(true)

  }
  const [notelist, setNotelist] = useState([])
  const [currentChoice, setCurrentChoice] = useState("Notes")
  const getallNotes = () => {
    getNotesList().then((response) => {
      let filter = []
      if (currentChoice === "Notes") {
        filter = response.data.data.data.filter((note) => {
          if (note.isArchived === false && note.isDeleted===false)  {
            return note
          }
        })
      }
      if (currentChoice === "Archive") {
        filter = response.data.data.data.filter((note) => {
          if (note.isArchived === true && note.isDeleted===false) {
            return note
          }
        })
      }
      if (currentChoice === "Trash") {
        filter = response.data.data.data.filter((note) => {
          if (note.isDeleted === true && note.isArchived===false) {
            return note
          }
        })
      }
      console.log(response)
      setNotelist(filter)


    })
      .catch((error) =>
        console.log(error)
      )
  }
 

useEffect(() => {
  getallNotes()

}, [currentChoice])

const listenToDrawer = (noteChoice) => {
  setCurrentChoice(noteChoice)
  console.log(currentChoice)

}

function closeNote2() {
  setToggle(false)
}
const [openDrawer, setOpenDrawer] = useState(false)
const listenToHeader = () => {
  setOpenDrawer(!openDrawer)


}

return (
  <div>
    <AppBarOne listenToHeader={listenToHeader} />
    <DrawerOne openDrawer={openDrawer} listenToDrawer={listenToDrawer} />
    <div>
      {
        toggle ? <TakeNote2 closeNote2={closeNote2} /> : <TakeNote1 listenTotakeNote1={listenTotakeNote1} />

      }
      <div style={{ width: '70vw', height: '40vh', display: 'flex', flexDirection: 'row', position: 'relative', left: '400px', top: '80px', flexWrap: "wrap" }}>
        {
          notelist.map((note) => (<Takenote3 note={note} />))
        }
      </div>


    </div>

  </div>
)
}


export default Dashboard



