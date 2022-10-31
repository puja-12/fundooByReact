import React from 'react'
import InputBase from '@mui/material/InputBase';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';



const useStyle=makeStyles(
    {
        Note1Container: {
            /* border: 1px solid grey; */
            display: 'flex',
            flexDirection: 'row',
            justifyContent:' space-around',
            alignItems: 'center',
            height: '6vh',
            width: '45vw',
            // boxShadow: '2px 2px 5px 5px rgb(233, 232, 232)',
            borderRadius: '9px',
            position: 'relative',
            left:'500px',
            bottom:'40px'
        },
        Note1Text :{
            /* border: 1px solid black; */
            width: '70%',
            height: '80%',
            display: 'flex',
            alignItems: 'center'
        },
        Note1icon: {
            /* border: 1px solid black; */
            width: '30%',
            height: '80%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'cente'
        }
        
    }
 
)
function TakeNote1(props) {
    const classes= useStyle()
    const openNote2=() => {
       props.listenTotakeNote1()
    }

    return (
        <Box >
            <Paper  elevation={5} className={classes.Note1Container} onClick={openNote2}>

                <Box  className={classes.Note1Text}>
                    <InputBase type="text" placeholder="Take a note..."  />
                </Box>
                <Box  className={classes.Note1icon}>
                    <CheckBoxOutlinedIcon style={{ width: "33px", height: "33px", color: "grey" }} />
                    <BrushOutlinedIcon style={{ width: "33px", height: "33px", color: "grey" }} />
                    <ImageOutlinedIcon style={{ width: "33px", height: "33px", color: "grey" }} />
                </Box>

            </Paper>
        </Box>
    )
}

export default TakeNote1