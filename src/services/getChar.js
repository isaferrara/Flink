
// fetch character info from API 
//GET name, species, gender, house, dateOfBirth,
// yearOfBirth, ancestry, eyeColour, hairColour,
// wand {wood, core, length}, patronus, hogwartsStudent, 
//hogwartsStaff, actor, alive, image
function getCharacters() {

  var myHeaders = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE'
  });

    return fetch('https://hp-api.herokuapp.com/api/characters',{
      headers: myHeaders
    } 
  ).then((res) =>
      res.json()
    )
    .catch(()=>alert('Hola, tuve un problema con CORS en Safari, cambia a Chrome por favor <3, gracias espero que te guste mi trabajo!'))
  }

  export default getCharacters

  // alert('Hola, tuve un problema con CORS en Safari, cambia a Chrome por favor <3, gracias espero que te guste mi trabajo!')