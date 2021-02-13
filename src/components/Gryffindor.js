import React, { useEffect, useState } from 'react';
import getChar from '../services/getChar'
import {Wrap, CardChar, CardInfo, InfoColumn, ImgHouse, ImgChar, LinkChar} from './AuthForms'

const Gryffindor = () => {
    const [charactersHP, setCharacters] = useState([]);
    
    useEffect(() => {  
      getChar()
        .then((characters) =>setCharacters(characters))
        .catch((error) => console.error(error));
    }, []);

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
export default Gryffindor