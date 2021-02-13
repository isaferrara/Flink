import React from 'react'
import { useAuth } from "../context/auth";
import {Menu, Layout} from 'antd'
import {Link} from 'react-router-dom'
const { Header} = Layout;


const NavBar = () => {
    const { authTokens, setAuthTokens} = useAuth();

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
            {/* si eres staff, te dirige a admin, sino a student */}
            {!authTokens? 
                <>       
                <Menu.Item key="3" onClick={logOut}>
                    <Link to="/login"  >
                    Login
                    </Link>
                </Menu.Item>
            </> :
            authTokens.staff===true ? <>       
                <Menu.Item key="2">
                <Link to="/admin">
                    Directory
                </Link>
                </Menu.Item>
                <Menu.Item key="3" onClick={logOut}>
                    <Link to="/login"  >
                    Logout
                    </Link>
                </Menu.Item>
            </> : <>
                <Menu.Item key="4" >
                    <Link to="/student"  >
                    Directory
                    </Link>
                </Menu.Item>
                <Menu.Item key="5" onClick={logOut}>
                    <Link to="/login"  >
                    Logout
                    </Link>
                </Menu.Item>
                </> }
        </Menu>
      </Header>
    )
}
export default NavBar