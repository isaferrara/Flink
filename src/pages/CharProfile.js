import React, { useEffect, useState } from 'react';
import getChar from '../services/getChar'
import NavBar from '../components/NavBar';
import {CardProfile,
    Status,
    ExtraInfos,
    ImgCharProfile,
    CardProfileNameSearch,
    InfoRow, 
    DivSpace,
    InfoColumn,
    TextExtra,
    Name
} from '../components/AuthForms'
import {
    Select,
    Form,
    Button
} from 'antd'


//Componente con información detallada de el personaje seleccionado

const CharProfile = (props) => {
    const name= props.match.params.name
    const [form] = Form.useForm()
    const [charactersHP, setCharacters] = useState([]);
    const [extras, setExtra] = useState([]);

    // Usamos useEffect para ejecutar la funcion llama a nuestros
    // personajes cuando se renderiza nuestro componente 
    // el [] es para indicar que solo se ejecuta una vez
    useEffect(() => {  
      getChar()
        .then((characters) =>setCharacters(characters))
        .catch((error) => console.error(error));
    }, []);
    
    
    // filtramos los personajes para solo mostrar al que recibimos en los props 
    const student= charactersHP.filter(char=> char.name===name)

    function submitForm (e){
        // e.extra es el valor que nos manda el formulario Ej. 'gender'
        const info=e.extra

        //info=== 'gender'
        //HarryPotter[info]==='male'
        //Si es de tipo string, capitalizamos la primera letra ('Male'), sino solo mostramos la información (1970) 
        typeof(student[0][info])==='string'? setExtra(student[0][info].charAt(0).toUpperCase()+student[0][info].slice(1))
        : setExtra(student[0][info])
    }


    return (
        <div>
            <NavBar/>
          {student.map((character) => (
                <div key={character.name}>
                <CardProfileNameSearch>                
                            <Name> {character.name}</Name>
                    
                    <CardProfile >
                        <div style={{textAlign:'center'}}>
                            <ImgCharProfile src={character.image} alt={character.name}/>
                        </div>
                        <InfoRow>

                        {/* presentar información de nuestro personaje */}
                        <DivSpace>
                            <h3> General information</h3>
                            <p><b>House:</b> {character.house? character.house: 'Not available'  }</p>
                            <p><b>Birthday:</b> {character.dateOfBirth ? character.dateOfBirth: 'Not available' }</p>
                            <p><b>Patronous:</b> {character.patronus ? character.patronus: 'Not available' }</p>
                            <p><b>Blood:</b> {character.ancestry ? character.ancestry: 'Not available' }</p>
                        </DivSpace>
                        <DivSpace>
                            <h3>Wand information</h3>
                            <p><b>Core:</b> {character.wand.core? character.wand.core: 'Not available'}</p>
                            <p><b>Length:</b> {character.wand.length? character.wand.length: 'Not available'}</p>
                            <p><b>Wood:</b> {character.wand.wood? character.wand.wood: 'Not available'}</p>

                        </DivSpace>
                        </InfoRow>
                            {/* Cambiamos la imagen para demostrar si está vivo o muerto */}
                        {character.alive===true? 
                        <InfoColumn>
                        <h1>Alive</h1>
                        <Status src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_corazón.svg/160px-Heart_corazón.svg.png'}/>
                        </InfoColumn>: 
                        <InfoColumn>
                        <h1>Dead</h1>
                        <Status src={'https://i.pinimg.com/originals/9b/fb/f4/9bfbf45b1cb45e67d3e660de982ea9c0.png'}/>
                        </InfoColumn>
                        }                       
                    </CardProfile>

                    {/* buscador de información extra */}
                    <ExtraInfos>
                    <Form form={form} layout="vertical" onFinish={submitForm } style={{width:'40vh'}}>
                    <Form.Item name="extra" label="Extra info">                            
                                <Select placeholder="What else so you want to know?">
                                <Select.Option value="gender">Gender</Select.Option>
                                <Select.Option value="yearOfBirth">Year of birth</Select.Option>
                                <Select.Option value="species">Species</Select.Option>
                                <Select.Option value="eyeColour">Eye Colour</Select.Option>
                                <Select.Option value="hairColour">Hair Colour</Select.Option>
                                <Select.Option value="actor">Actor</Select.Option>
                                </Select>
                    </Form.Item>
                        <Button type="primary" block htmlType="submit">
                            Search
                        </Button>
                    </Form>
                    
                    <TextExtra>{extras}</TextExtra>
                    </ExtraInfos>   
                </CardProfileNameSearch>

                </div>
            ))}
        </div>
    )
}
export default CharProfile

