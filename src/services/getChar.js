

// fetch character info from API 
//GET name, species, gender, house, dateOfBirth,
// yearOfBirth, ancestry, eyeColour, hairColour,
// wand {wood, core, length}, patronus, hogwartsStudent, 
//hogwartsStaff, actor, alive, image
export default function getCharacters() {
  var myHeaders = new Headers({
    'Content-Type': 'text/plain',
    'X-Custom-Header': 'hello world'
  });
    return fetch('http://hp-api.herokuapp.com/api/characters',{
      headers: myHeaders
    }).then((res) =>
      res.json()
    );
  }