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

//Aquí vemos la página para los prodesores, es muy similar a la de estudiantes excepto que 
//ellos pueden entrar al perfil de los profesores y a la de los estudantes
function Admin() {

  //authTokens contain name,house and if they're staff
  const {authTokens } = useAuth();
  
  return (
    <CardChar>
    <NavBar/>
        <Title>
        
        {/* si de authTokens.staff===true es que es profesor, sino es estudiante */}
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