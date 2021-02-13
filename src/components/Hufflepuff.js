import React, { useEffect, useState } from 'react';
import getChar from '../services/getChar'
import {Wrap, CardChar, CardInfo, InfoColumn, ImgHouse, ImgChar, LinkChar} from './AuthForms'

//Componente con información general de personajes si pertenecen a Hufflepuff


const Hufflepuff = () => {
    const [charactersHP, setCharacters] = useState([]);

    // Usamos useEffect para ejecutar la funcion llama a nuestros
    // personajes cuando se renderiza nuestro componente
    useEffect(() => {  
    getChar()
        .then((characters) =>setCharacters(characters))
        .catch((error) => console.error(error));
    }, []); 

     // filtramos los personajes para solo mostrar al que son estudiantes de Hufflepuff
    const hufflepuffStudents= charactersHP.filter(char=> char.house==='Hufflepuff'&& char.hogwartsStudent===true)

    return (
        <CardChar>
            <h1>Hufflepuff</h1>
            <Wrap>
            {hufflepuffStudents.map((character, i) => (
                <LinkChar key={character.name} to={`/char/${character.name}`}>
                    <CardInfo  key={i}>
                    <ImgChar src={character.image} alt={character.name}/>
                        <InfoColumn>
                        <ImgHouse src={'https://i.pinimg.com/originals/3d/af/c1/3dafc187a67cd577508762150985f65c.png'} alt={'Hufflepuff'}/>
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
export default Hufflepuff