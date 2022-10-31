import React from 'react'


import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoRoundedIcon from '@mui/icons-material/UndoRounded';
import RedoRoundedIcon from '@mui/icons-material/RedoRounded';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { postNotes } from '../../sevices/dataServices';
import { useState } from 'react';
import ColorPopper from '../colorPopper/colorPopper';
import InputBase from '@mui/material/InputBase';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';




const useStyle=makeStyles({
  Note2Container :{
    /* border: 1px solid grey; */
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '22vh',
    width: '45vw',
    // boxShadow: '2px 2px 5px 5px rgb(233, 232, 232)',
    borderRadius: '9px',
    position: 'relative',
    left:'500px',
    bottom: '40px'
},
Note2Title :{
  /* border: 1px solid black; */
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: '30%',
  width: '100%'
},
Note2Text: {
  /* border: 1px solid black; */
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '30%',
  width: '93%'
},

Note2footer :{
  /* border: 1px solid black; */
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: '30%',
  width:' 100%'
},
notes2icons :{
  /* border: 1px solid black; */
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: '90%',
  width:' 70%'
  /* cursor: pointer; */
},

close :{
  /* border: 1px solid black; */
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  height:' 90%',
  width:' 20%'
}


})

function TakeNote2(props) {
  const classes= useStyle()
  const [inputvalues, setinputValues] = useState({
    title: "",
    description: "",
    color:"",
    isArchived: false,

  })
  const openNote1 = () => {
    props.closeNote2()
    postNotes(inputvalues).then((response) => {
      console.log(response)
    })
      .catch((error) =>
        console.log(error)
      )
  }
  const takingTitle = (event) => {
    setinputValues(prevState => ({
      ...prevState,
      title: event.target.value
    }))
    console.log(event.target.value)
  }
  const archiveNote =() => {
    setinputValues(prevState => ({
      ...prevState,
      isArchived: true
    }))
    console.log("notes is archieved")
  }
  const takingDescription = (event) => {
    setinputValues(prevState => ({
      ...prevState,
      description: event.target.value
    }))
  }
  const listentoColorPopper=(colour) =>{
    setinputValues(prevState => ({
      ...prevState,
      color:colour
      }))
  }


  return (
    <Box>
      <Paper elevation={5} className={classes.Note2Container} style ={{backgroundColor:inputvalues.color}} >
        <Box className={classes.Note2Title} >
        <InputBase  fullWidth style = {{backgroundColor : inputvalues.color , position:'relative',left:'20px'}} placeholder="Title" onChange={takingTitle} />
          <PushPinOutlinedIcon style={{ width: "33px", height: "28px", color: "black", cursor: "pointer" }} />
        </Box>

        <Box className={classes.Note2Text}>
        <InputBase style = {{backgroundColor : inputvalues.color}} placeholder="Take a note..." onChange={takingDescription} />
        </Box>
        <Box className={classes.Note2footer}>
          <Box className={classes.notes2icons}>
            <AddAlertOutlinedIcon style={{ cursor: "pointer" }} />
            <PersonAddAltOutlinedIcon style={{ cursor: "pointer" }} />
          
            {/* <PaletteOutlinedIcon style={{ cursor: "pointer" }} /> */}
            <ColorPopper listentoColorPopper={listentoColorPopper} action='create'/>
            <InsertPhotoOutlinedIcon style={{ cursor: "pointer" }} />
            <ArchiveOutlinedIcon style={{ cursor: "pointer" }} onClick={archiveNote} />
            <MoreVertOutlinedIcon style={{ cursor: "pointer" }} />
            <UndoRoundedIcon style={{ cursor: "pointer" }} />
            <RedoRoundedIcon style={{ cursor: "pointer" }} />
          </Box>
          <Box className={classes.close} >
            <button onClick={openNote1}>close</button>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

export default TakeNote2