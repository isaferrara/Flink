import React from 'react'
import { useAuth } from "../context/auth";
import {Menu, Layout} from 'antd'
import {Link} from 'react-router-dom'
const { Header} = Layout;


const NavBar = () => {
    const { setAuthTokens, authTokens } = useAuth();

    function logOut() {
        setAuthTokens();
      }

    return (
<Header className="header" style={{width:'100%', height:'70px'}}>
        <div className="logo" style={{display:'flex', justifyContent:'right'}}/>
        <Menu theme="dark" mode="horizontal"  >
            <Menu.Item key="1">
                <Link to="/">
                Home
                </Link>
            </Menu.Item>
            {!authTokens ? <>       
            <div style={{border:'1px solid white'}}>
                <Menu.Item key="2">
                <Link to="/login">
                    Login
                </Link>
                </Menu.Item>
            </div>
            </> : <>
                <Menu.Item key="3" onClick={logOut} style={{ borderTop:'1px solid gray'}}>
                    <Link to="/"  >
                    Logout
                    </Link>
                </Menu.Item>
                </> }
        </Menu>
      </Header>
    )
}
export default NavBar