import React, { useEffect, useState } from 'react';
import getChar from '../services/getChar'
import {Wrap, CardChar, CardInfo, InfoColumn, ImgHouse, ImgChar, LinkChar} from './AuthForms'


export const Slytherin = () => {
    const [charactersHP, setCharacters] = useState([]);

    useEffect(() => {  
      getChar()
        .then((characters) =>setCharacters(characters))
        .catch((error) => console.error(error));
    }, []); 


    const slytherinStudents= charactersHP.filter(char=> char.house==='Slytherin'&& char.hogwartsStudent===true)

    return (
        <CardChar>
            <h1>Slytherin</h1>
            <Wrap>
            {slytherinStudents.map((character, i) => (
                <LinkChar key={character.name} to={`/char/${character.name}`}>
                <CardInfo  key={i}>
                <ImgChar src={character.image} alt={character.name}/>
                        <InfoColumn>
                        <ImgHouse src={'https://miro.medium.com/max/500/0*m0pYj25tg4A2mAfU.png'} alt={'Slytherin'}/>
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
export default Slytherin