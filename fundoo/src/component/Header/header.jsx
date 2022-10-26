import React from 'react'
import './header.css'
import MenuOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Clear from '@mui/icons-material/Clear';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function Header() {
    return (
        <div >
            <div class='headerContainer'>
                <div class='icon1'>
                    <div><MenuOutlinedIcon /> </div>
                    <img src='images/keep.png' style={{ width: "33px", height: "33px", flexDirection: "row" }} />
                    <div class="keeptext">Keep</div>
                </div>
                <div class='icon2'>
                    <SearchIcon />
                    <input type="text" placeholder="Search" ></input>
                    <Clear />
                </div>
                <div class='icon3'>
                    <RefreshIcon style={{ width: "33px", height: "33px", flexDirection: "row" }} />
                    <SettingsOutlinedIcon style={{ width: "33px", height: "33px", flexDirection: "row" }} />
                </div>
                <div class='icon4'>
                    <AppsRoundedIcon style={{ width: "33px", height: "33px", flexDirection: "row" }} />
                    <AccountCircleIcon style={{ width: "33px", height: "33px", flexDirection: "row" }} />
                </div>
            </div>
        </div>
    )
}

export default Header