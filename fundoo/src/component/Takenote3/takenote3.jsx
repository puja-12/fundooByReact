import React from 'react'
import './takenote3.css'

import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';


function Takenote3(props) {
    return (
        <div >
            <div class="Note3Container">
                <div class="Note3Title">
                <div >
                        {props.note.title}
                    </div>
                     {/* <input type="text" placeholder="Title" /> */}
                     <PushPinOutlinedIcon style={{ width: "25px", height: "25px", color: "black", cursor: "pointer" }} />
                </div> 
                <div class="Note3Text">    
                <div>
                        {props.note.description}
                        
                    </div>              
                    {/* <textarea placeholder='Take a note'></textarea> */}
                </div>
                <div class="Note3footer">
                    <AddAlertOutlinedIcon style={{ cursor: "pointer" }} />
                    <PersonAddAltOutlinedIcon style={{ cursor: "pointer" }} />
                    <PaletteOutlinedIcon style={{ cursor: "pointer" }} />
                    <InsertPhotoOutlinedIcon style={{ cursor: "pointer" }} />
                    <ArchiveOutlinedIcon style={{ cursor: "pointer" }} />
                    <MoreVertOutlinedIcon style={{ cursor: "pointer" }} />
                </div>
            </div>
        </div>
    )
}

export default Takenote3