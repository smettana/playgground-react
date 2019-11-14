import React from 'react';
import { connect } from 'react-redux';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink, Link } from "react-router-dom";
import DehazeIcon from '@material-ui/icons/Dehaze';


import logo from '../../images/logo_iht.jpg';
const _Header = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // console.log(this.props)
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt=""/>
                </Link>
            </div>
            <div className="menu">
                <DehazeIcon aria-controls="simple-menu" aria-haspopup="true" fontSize="large" onClick={handleClick}/>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}><NavLink exact to="/">Home</NavLink></MenuItem>
                    {props.roles.admin && <MenuItem onClick={handleClose}><NavLink  to="/add">Add</NavLink></MenuItem>}
                </Menu>
            </div>
            
        </header>
    )
}

const Header = connect(
    state => ({
        roles: state.roles
    })
)(_Header);

export default Header;