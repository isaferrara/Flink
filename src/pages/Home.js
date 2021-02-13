import React from "react";
import { HP , ButtonHome} from "../components/AuthForms";

function Home () {
  return( 
  <HP>
  <ButtonHome to='/login'> Login</ButtonHome>
  </HP>
  );
}

export default Home;