import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from 'axios';
import { Card, Logo, Form, Input, Button, Error, HPLogin, ButtonHarry, ButtonSnape, InfoRow} from "../components/AuthForms";
import { useAuth } from "../context/auth";
import { Divider } from "antd";

function Login(props) {
  const [isLoggedInAdmin, setLoggedInAdmin] = useState(false);
  const [isLoggedInStud, setLoggedInStud] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  let axiosConfig = {
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3001',
      'Content-Type': "application/json, text/plain",
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    }
  };

  const info ={
    user:user,
    password: password
  }

  function postLogin() {
    axios({url:'http://ec2-52-37-61-68.us-west-2.compute.amazonaws.com:1234/api/v1/challenge/login', 
    method: 'POST', 
    data: info,
    axiosConfig
  }).then(result => {
      if ( result.status===200 && result.data.staff===true) {
        setAuthTokens(result.data);
        setLoggedInAdmin(true);
      }else if(result.status===200 && result.data.staff===false){
        setAuthTokens(result.data);
        setLoggedInStud(true)
      }else{
        setIsError(true);
      }
    }).catch(e => {
      console.log('ver código en src/pages/Login 46 para ver solución temporal a CORS ')
      // El API funciona, hace el login correctamente (hice las pruebas con CORS desactivado) y redirige al usuario a la página que le corresponde
      // sin embargo me encontré con un problem de CORS que es necesario solucionar en el backend.
      //el código de abajo solo es un a solución rápida y temporal para hacer el login
      if(user === 'snape@hogwarts.com' && password==='snape0109'){
        setAuthTokens({
          name: "Severus Snape",
          house: "Slytherin",
          staff: true
      })
      setLoggedInAdmin(true);
      } else if(user === 'harry@hogwarts.com' && password==='harry3107'){
        setAuthTokens({
          name: "Harry Potter",
          house: "Gryffindor",
          staff: false
      })
      setLoggedInStud(true)
      }else{
        setIsError(true);

      }
    });
  }

function loginHarry(){
  setLoggedInStud(true)
  setAuthTokens({ name: "Harry Potter", house: "Gryffindor", staff: false})
}
function loginSnape(){
  setLoggedInAdmin(true)
  setAuthTokens({ name: "Severus Snape", house: "Slytherin", staff: true})
}

  if (isLoggedInAdmin){
    return <Redirect to='/admin'/>
  }else if (isLoggedInStud){
    return <Redirect to='/student'/>
  }


  return (
    <HPLogin>
    <Card>
      <Logo src={'https://i.pinimg.com/originals/1e/39/03/1e390396d7381a36a73407df5cc02fb1.png'} />
      <Form>
      <h1>Login</h1>
        <Input
          type="user"
          value={user}
          onChange={ e => {
            setUserName(e.target.value);
          }}
          placeholder="user"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <Button onClick={postLogin}>Login</Button>
      </Form>
        { isError &&<Error>The username or password provided are incorrect!</Error> }
        <Divider>or</Divider>
        <InfoRow>
          <ButtonHarry onClick={loginHarry}/>
          <ButtonSnape onClick={loginSnape}/>
        </InfoRow>
    </Card>

    </HPLogin>
  );
}

export default Login;