import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import { updateColor } from '../../sevices/dataServices';


export default function ColorPopper(props) {
  const colors = ["#2ECC71", "#AF7AC5", "#F1948A", "#A3E4D7", "#F5B7B1", "#F5B041", "#DC7633", "#F1C40F", "#AAB7B8", "#F1948A", "#2ECC71", "#F5B041"]
  // const colors =['red','blue','black']
  const [anchorEl, setAnchorEl] = React.useState(null);
  const selectcolor = (colour) => {
    if (props.action === 'create') {
      props.listentoColorPopper(colour)
      console.log(colour)
    }
    else if (props.action === 'update') {
      let dataObj = { noteIdList: [props.id], color: colour }
      updateColor(dataObj).then((response) => {
        console.log(response)
      })
        .catch((error) =>
          console.log(error)
        )
    }
  }



const handleClick = (event) => {
  setAnchorEl(anchorEl ? null : event.currentTarget);
};

const open = Boolean(anchorEl);
const id = open ? 'simple-popper' : undefined;

return (
  <div>


    <PaletteOutlinedIcon style={{ cursor: "pointer" }} onClick={handleClick} />

    <Popper id={id} open={open} anchorEl={anchorEl}>
      <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', display: 'flex' }}>
        {
          colors.map((color) => (
            <div style={{ width: 25, height: 25, borderRadius: 50, border: "1px solid black", backgroundColor: color }} onClick={() => selectcolor(color)}></div>
          ))
        }
      </Box>
    </Popper>
  </div>
);
}

