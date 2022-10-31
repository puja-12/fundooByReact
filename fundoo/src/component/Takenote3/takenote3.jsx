import React, { useState } from 'react'
import './takenote3.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { archieveNotes, trashNotes, updateNotes } from '../../sevices/dataServices';
// import TakeNote2 from '../takenote2/takenote2';
import ColorPopper from '../colorPopper/colorPopper';
import InputBase from '@mui/material/InputBase';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import UndoRoundedIcon from '@mui/icons-material/UndoRounded';
import RedoRoundedIcon from '@mui/icons-material/RedoRounded';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';


const useStyle=makeStyles({
    Note3Container :{
        border: '1px solid grey',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '25vh',
        width: '18vw',
        // box-shadow: 2px 2px 2px 2px rgb(233, 232, 232);
        borderRadius: '9px',
        /* margin: 10% 10% 0% 10%;     */
        marginRight: '10px',
        marginBottom: '20px'
    },
    
    Note3Title :{
        /* border: 1px solid black; */
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height:' 18%',
        width: '90%'
    },
    
    Note3Text: {
        /* border: 1px solid black; */
        display: 'flex',
        /* flex-direction: row; */
        justifyContent: 'flex-start',
        /* align-items: center; */
        height: '56%',
        width: '90%',
    },
    
    Note3footer :{
        /* border: 1px solid black; */
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '18%',
        width: '100%',
    },
    note:{
        /* border: 1px solid grey; */
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '29vh',
        width: '35vw',
        position: 'relative',
        bottom:'20%',
        right:'7%'
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
      
}
)



function Takenote3(props) {
    const classes= useStyle()

    const [inputvalues, setinputValues] = useState({
        noteId:"",
        title: "",
        description: "",
        isArchived: false,
        isDeleted: false
       
         
    
      })
      const setPrevTitle=(event)=>{
        console.log(inputvalues.title)

        setinputValues(prevState => ({
            ...prevState,
            title:event.target.value
         } ))
      }
      console.log(inputvalues,"hello")
      const setPrevDesc=(event)=>{

        setinputValues(prevState => ({
            ...prevState,
            description:event.target.value
         } ))
      }
      const updateModel=() =>{
        updateNotes(inputvalues).then((response) => {
            console.log(response)
          })
            .catch((error) =>
              console.log(error)
            )
        }
      
    // const listentoColorPopper=(colour) =>{
    //     setinputValues(prevState => ({
    //       ...prevState,
    //       color:colour
    //       }))
    //     }

    const [open, setOpen] = React.useState(false);
    const handleOpen = (noteObj) => {
        console.log(noteObj, "this is for modification")
        setOpen(true);
        setinputValues({noteId:noteObj.id,title:noteObj.title,description:noteObj.description})
    }

    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 480,
        height: 200,
        borderRadius: 2,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
        p: 4,


    };

    const updateArcheive = (id) => {
        let archeiveObject = { noteIdList: [id], isArchived: true }
        archieveNotes(archeiveObject).then((response) => {
            console.log(response)
        })
            .catch((error) =>
                console.log(error)
            )
    }
    const updateTrash = (id) => {
        let trashObj = { noteIdList: [id], isDeleted: true }
        
        trashNotes(trashObj).then((response) => {
            console.log(response)
        })
            .catch((error) => {
                console.log(error)
            })
    }
    console.log(props, 'note3 props')
    return (
        <Box >
            <Paper elevation={2}  className={classes.Note3Container} style={{backgroundColor:props.note.color}}>
                <Box  className={classes.Note3Title} >
                    <Box onClick={() => handleOpen(props.note)}>
                        {props.note.title}
                    </Box>
                    {/* <input type="text" placeholder="Title" /> */}
                    <PushPinOutlinedIcon style={{ width: "25px", height: "25px", color: "black", cursor: "pointer" }} />
                </Box>
                <Box  className={classes.Note3Text}  onClick={() => handleOpen(props.note)}>
                    <Box>
                        {props.note.description}

                    </Box>
                    {/* <textarea placeholder='Take a note'></textarea> */}
                </Box>
                <Box  className={classes.Note3footer} >
                    <AddAlertOutlinedIcon style={{ cursor: "pointer" }} />
                    <PersonAddAltOutlinedIcon style={{ cursor: "pointer" }} />
                    {/* <PaletteOutlinedIcon style={{ cursor: "pointer" }} /> */}
                    <ColorPopper  action='update' id={props.note.id}/>
                    <InsertPhotoOutlinedIcon style={{ cursor: "pointer" }} />
                    <DeleteOutlineOutlinedIcon style={{ cursor: "pointer" }} onClick={() => updateTrash(props.note.id)} />
                    <ArchiveOutlinedIcon style={{ cursor: "pointer" }} onClick={() => updateArcheive(props.note.id)} />
                    <MoreVertOutlinedIcon style={{ cursor: "pointer" }} />
                </Box>
            </Paper>
            <Modal


                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} style={{backgroundColor:props.note.color}}>
                    <Box className={classes.note} >
                    <Box className={classes.Note2Title} onClick={() => handleOpen(props.note)} style={{color:"black"}}>
                    <InputBase fullWidth  type="string" defaultValue={props.note.title} onChange={setPrevTitle} style={{position:"relative",left:"10px"}} />
                        {/* <input type="text" placeholder={props.note.title} /> */}
                        <PushPinOutlinedIcon style={{ width: "33px", height: "28px", color: "black", cursor: "pointer" }} />
                    </Box>
                    <Box className={classes.Note2Text} onClick={() => handleOpen(props.note)}>
                    <InputBase fullWidth type="string" defaultValue={props.note.description} onChange={setPrevDesc} />
                    </Box>
                    <Box className={classes.Note2footer}>
                        <Box className= {classes.notes2icons}>
                            <AddAlertOutlinedIcon style={{ cursor: "pointer" }} />
                            <PersonAddAltOutlinedIcon style={{ cursor: "pointer" }} />
                            {/* <PaletteOutlinedIcon style={{ cursor: "pointer" }} /> */}
                            <ColorPopper />
                            <InsertPhotoOutlinedIcon style={{ cursor: "pointer" }} />
    
                            <ArchiveOutlinedIcon style={{ cursor: "pointer" }} />
                            <MoreVertOutlinedIcon style={{ cursor: "pointer" }} />
                            <UndoRoundedIcon style={{ cursor: "pointer" }} />
                            <RedoRoundedIcon style={{ cursor: "pointer" }} />
                        </Box>
                        <Box className={classes.close} >
                            <button onClick={updateModel}>close</button>
                        </Box>
                    </Box>
                </Box>


            </Box>
        </Modal>
        </Box >
    )
}

export default Takenote3