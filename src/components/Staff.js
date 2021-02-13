import React, { useEffect, useState } from 'react';
import getChar from '../services/getChar'
import {Wrap, CardChar, CardInfo, InfoColumn, ImgHouse, ImgChar, LinkChar} from './AuthForms'


const Staff = () => {
    const [charactersHP, setCharacters] = useState([]);
    
    useEffect(() => {  
      getChar()
        .then((characters) =>setCharacters(characters))
        .catch((error) => console.error(error));
    }, []);

    const professors= charactersHP.filter(char=>  char.hogwartsStudent===false)

    return (
        <CardChar>
            <Wrap>
            {professors.map((character, i) => (
                <LinkChar key={character.name} to={`/char/${character.name}`}>
                    <CardInfo  key={i}>
                    <ImgChar src={character.image} alt={character.name}/>
                        <InfoColumn>
                        <ImgHouse src={'https://i.pinimg.com/originals/1e/39/03/1e390396d7381a36a73407df5cc02fb1.png'} alt={'Staff'}/>
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
export default Staff