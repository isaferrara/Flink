import React from "react";
import { useAuth } from "../context/auth";
import Gryffindor from '../components/Gryffindor';
import Slytherin from '../components/Slytherin';
import Hufflepuff from '../components/Hufflepuff';
import Ravenclaw from '../components/Ravenclaw';
import StaffStudents from "../components/StaffStudents";
import { CardChar, Title} from '../components/AuthForms'
import NavBar from '../components/NavBar';
import { Divider } from "antd";

//Aquí vemos la página para los estudiantes, es muy similar a la de profesores excepto que 
//ellos no pueden entrar al perfil de los profesores, solo ver su info básica 
export const Student = () => {
    const { authTokens } = useAuth();

    return (
        <CardChar>
            <NavBar/>
            <Title>
                {/* si authTokens es es verdadera, es que es profesor, sino es estudiante */}
                {authTokens.staff===true? <h3> Staff's Page</h3>: <h3> Student's Page</h3>}

                <h1 style={{marginTop: '30px'}}>WELCOME <br/><b>{authTokens.name.toUpperCase()}</b>!</h1>
                <h4 style={{ width: '700px'}}>You can only access the students' information, everything else is in the Forbidden Section.
                <br/>
                To logout say "mischief managed" (if you are a Muggle you could just Logout).</h4>
            </Title>
            <Divider>Students</Divider>
                <Gryffindor/>
                <Slytherin/>
                <Hufflepuff/>
                <Ravenclaw/>
            <Divider>Staff</Divider>
                <StaffStudents/>
        </CardChar>
    )
}

export default Student