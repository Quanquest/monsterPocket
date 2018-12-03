
const pokedex = {
  Bulbasaur: {
    num: 1,
    species: 'Bulbasaur',
    type: 'grass',
    basestats: {hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45},
    gen5Sprite: 'https://s3-us-west-1.amazonaws.com/rhood/bulbasaur.png',
  },
  Charmander: {
    num: 4,
    species: 'Charmander',
    type: 'fire',
    basestats: {hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65},
    gen5Sprite: 'https://s3-us-west-1.amazonaws.com/rhood/charmander.png',
  },
  Squirtle: {
    num: 7,
    species: 'Squirtle',
    type: 'water',
    basestats: {hp: 44, atk: 48, def: 65, spa: 50, spd: 64, spe: 43},
    gen5Sprite: 'https://s3-us-west-1.amazonaws.com/rhood/squirtle.png',
  }
}

export default pokedex;
