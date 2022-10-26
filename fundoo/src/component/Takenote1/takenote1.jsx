import React from 'react'
import './takenote1.css'

import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

function TakeNote1(props) {
    const openNote2=() => {
       props.listenTotakeNote1()
    }

    return (
        <div >
            <div class="Note1Container" onClick={openNote2}>

                <div class="Note1Text">
                    <input type="text" placeholder="Take a note..."  ></input>
                </div>
                <div class="Note1icon">
                    <CheckBoxOutlinedIcon style={{ width: "33px", height: "33px", color: "grey" }} />
                    <BrushOutlinedIcon style={{ width: "33px", height: "33px", color: "grey" }} />
                    <ImageOutlinedIcon style={{ width: "33px", height: "33px", color: "grey" }} />
                </div>

            </div>
        </div>
    )
}

export default TakeNote1