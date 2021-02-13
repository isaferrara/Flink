

// fetch character info from API 
//GET name, species, gender, house, dateOfBirth,
// yearOfBirth, ancestry, eyeColour, hairColour,
// wand {wood, core, length}, patronus, hogwartsStudent, 
//hogwartsStaff, actor, alive, image
export default function getCharacters() {
    return fetch('http://hp-api.herokuapp.com/api/characters').then((res) =>
      res.json()
    );
  }