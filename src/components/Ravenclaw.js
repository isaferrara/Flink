import React, { useEffect, useState } from 'react';
import getChar from '../services/getChar'
import {Wrap, CardChar, CardInfo, InfoColumn, ImgHouse, ImgChar, LinkChar} from './AuthForms'

//Componente con información general de personajes si pertenecen a Ravenclaw


const Ravenclaw = () => {
    const [charactersHP, setCharacters] = useState([]);

     // Usamos useEffect para ejecutar la funcion llama a nuestros
    // personajes cuando se renderiza nuestro componente
    useEffect(() => {  
      getChar()
        .then((characters) =>setCharacters(characters))
        .catch((error) => console.error(error));
    }, []); 

    // filtramos los personajes para solo mostrar al que son estudiantes de Ravenclaw
    const ravenclawStudents= charactersHP.filter(char=> char.house==='Ravenclaw' && char.hogwartsStudent===true)


    return (
        <CardChar>
            <h1>Ravenclaw</h1>
            <Wrap>
            {ravenclawStudents.map((character, i ) => (
                <LinkChar key={character.name} to={`/char/${character.name}`}>
                    <CardInfo  key={i}>
                    <ImgChar src={character.image} alt={character.name}/>
                        <InfoColumn>
                        <ImgHouse src={'https://i.pinimg.com/originals/df/90/1d/df901d445f6f31cbddf080fc4a3d4639.png'} alt={'Ravenclaw'}/>
                            <h2 >{character.name}</h2>
                            <h3>{character.house}</h3>
                        </InfoColumn>
                    </CardInfo>
                </LinkChar>
            ))}
            </Wrap>
        </CardChar>

    )
}
export default Ravenclaw