import React from 'react'
import './header.css'
import MenuOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Clear from '@mui/icons-material/Clear';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {connect} from 'react-redux'
import { InputBase } from '@mui/material';
import AppBarOne from './AppBar/appBar';





function Header(props) {
    const openDrawer=()=>{
        props.listenToHeader()
    }
    
    return (
        <AppBarOne />
    //   <div>
     
    //         <div class='headerContainer' >
    //             <div class='icon1'>
    //                 <div><MenuOutlinedIcon onClick={openDrawer} style={{ width: "25px", height: "33px"  }}/> </div>
    //                 <img src='images/keep.png' style={{ width: "40px", height: "38px", flexDirection: "row" }} />
    //                 <div class="keeptext" >{props.label}</div>
    //             </div>
    //             <div class='icon2'>
    //                 <SearchIcon />
    //                 <InputBase fullWidth type="text" placeholder="Search"  style={{position:"relative",left:"12px"}}/>
    //                 <Clear />
    //             </div>
    //             <div class='icon3'>
    //                 <RefreshIcon style={{ width: "26px", height: "33px", flexDirection: "row"  }} />
    //                 <SettingsOutlinedIcon style={{ width: "26px", height: "33px", flexDirection: "row" }} />
    //             </div>
    //             <div class='icon4'>
    //                 <AppsRoundedIcon style={{ width: "26px", height: "33px", flexDirection: "row" }} />
    //                 <AccountCircleIcon style={{ width: "26px", height: "33px", flexDirection: "row" }} />
    //             </div>
    //         </div>
    //         </div>
    )
}
const mapStateToProps=(state)=>{ 
return {
    label:state.drawerReducer.label
}
}

export default connect(mapStateToProps)(Header)