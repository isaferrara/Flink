import React from "react";
import { HP , ButtonHome} from "../components/AuthForms";
import NavBar from "../components/NavBar";

function Home () {
  return( 
  <HP>
  <NavBar/>
  <ButtonHome to='/login'> Login</ButtonHome>
  </HP>
  );
}

export default Home;