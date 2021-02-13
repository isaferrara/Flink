import React, { useEffect, useState } from 'react';
import getChar from '../services/getChar'
import {Wrap, CardChar, CardInfo, InfoColumn, ImgHouse, ImgChar, LinkChar} from './AuthForms'


//Componente con información general de personajes si pertenecen a Gryffindor

const Gryffindor = () => {
    const [charactersHP, setCharacters] = useState([]);
    

     // Usamos useEffect para ejecutar la funcion llama a nuestros
    // personajes cuando se renderiza nuestro componente
    useEffect(() => {  
      getChar()
        .then((characters) =>setCharacters(characters))
        .catch((error) => console.error(error));
    }, []);

     // filtramos los personajes para solo mostrar al que son estudiantes de Gryffindor
    const gryffindorStudents= charactersHP.filter(char=> char.house==='Gryffindor' && char.hogwartsStudent===true)

    return (
        <CardChar>
            <h1>Gryffindor</h1>
            <Wrap>
            {gryffindorStudents.map((character) => (
                <LinkChar key={character.name} to={`/char/${character.name}` }>
                    <CardInfo >
                    <ImgChar src={character.image} alt={character.name}/>
                        <InfoColumn>
                        <ImgHouse src={'https://i.pinimg.com/originals/4b/bb/81/4bbb816e7a69c34c45a0faf452f10b06.gif'} alt={'Gryffindor'}/>
                            <h2 style={{padding:'10px'}} >{character.name}</h2>
                            <h3>{character.house}</h3>
                        </InfoColumn>
                    </CardInfo>

                </LinkChar>
            ))}
            </Wrap>
        </CardChar>
    )
}
export default Gryffindor