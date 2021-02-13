import React from 'react';
import Gryffindor from './Gryffindor';
import Slytherin from './Slytherin';
import Hufflepuff from './Hufflepuff';
import Ravenclaw from './Ravenclaw';
import Staff from './Staff';

function Characters() {
    return (
    <div>
        <h1>Students</h1>
            <Gryffindor/>
            <Slytherin/>
            <Hufflepuff/>
            <Ravenclaw/>
        <h1>Staff</h1> 
            <Staff/>
    </div>
    );
    }

  export default Characters