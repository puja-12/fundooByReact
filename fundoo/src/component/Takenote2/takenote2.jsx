import React from 'react'
import './takenote2.css'

import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoRoundedIcon from '@mui/icons-material/UndoRounded';
import RedoRoundedIcon from '@mui/icons-material/RedoRounded';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';

function TakeNote2(props) {

  return (
    <div>
      <div class="Note2Container" >
        <div className="Note2Title">
          <input type="text" placeholder="Title" />
          <PushPinOutlinedIcon style={{ width: "33px", height: "28px", color: "black", cursor: "pointer" }} />
        </div>
        <div className="Note2Text">
          <input type="text" placeholder="Take a note..." />
        </div>
        <div className="Note2footer">
          <div className="notes2icons">
            <AddAlertOutlinedIcon style={{ cursor: "pointer" }} />
            <PersonAddAltOutlinedIcon style={{ cursor: "pointer" }} />
            <PaletteOutlinedIcon style={{ cursor: "pointer" }} />
            <InsertPhotoOutlinedIcon style={{ cursor: "pointer" }} />
            <ArchiveOutlinedIcon style={{ cursor: "pointer" }} />
            <MoreVertOutlinedIcon style={{ cursor: "pointer" }} />
            <UndoRoundedIcon style={{ cursor: "pointer" }} />
            <RedoRoundedIcon style={{ cursor: "pointer" }} />
          </div>
          <div className="close" >
            <button onClick={() => props.closeNote2()}>close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TakeNote2