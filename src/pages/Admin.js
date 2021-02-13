import React from "react";
import { useAuth } from "../context/auth";
import Gryffindor from '../components/Gryffindor';
import Slytherin from '../components/Slytherin';
import Hufflepuff from '../components/Hufflepuff';
import Ravenclaw from '../components/Ravenclaw';
import Staff from '../components/Staff';
import { CardChar, Title} from '../components/AuthForms'
import NavBar from '../components/NavBar';
import { Divider } from "antd";


function Admin(value) {
  const {authTokens } = useAuth();
  
  return (
    <CardChar>
    <NavBar/>
        <Title>
      {authTokens.staff===true? <h3> Staff's Page</h3>: <h1> Student's Page</h1>}
            <h1 style={{marginTop: '30px'}}>WELCOME {authTokens.name.toUpperCase()}</h1>
            <h3 style={{ width: '700px'}}>You have access to all the information you Accio (require).<br/>
            To logout say "mischief managed" (or you could just Logout).</h3>
        </Title>
        <Divider>Students </Divider>
            <Gryffindor/>
            <Slytherin/>
            <Hufflepuff/>
            <Ravenclaw/>
        <Divider>Staff</Divider>
            <Staff/>
    </CardChar>
  );
}

export default Admin;