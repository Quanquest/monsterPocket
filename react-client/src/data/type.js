
const type = {
  normal: {
    strongAgainst: [],
    weakTo: ['fighting'],
  },
  grass: {
    strongAgainst: ['water', 'rock', 'ground'],
    weakTo: ['fire', 'flying', 'ice', 'poison', 'bug'],
  },
  fire: {
    strongAgainst: ['grass', 'bug'],
    weakTo: ['water', 'rock', 'ground'],
  },
  water: {
    strongAgainst: ['fire', 'rock', 'ground'],
    weakTo: ['grass', 'electric'],
  },
  electric: {
    strongAgainst: ['water', 'flying'],
    weakTo: ['ground'],
  },
  rock: {
    strongAgainst: ['fire', 'flying', 'ice'],
    weakTo: ['fighting', 'water', 'grass', 'ground'],
  },
  ground: {
    strongAgainst: ['fire', 'electric', 'rock', 'poison'],
    weakTo: ['water', 'grass']
  },
  flying: {
    strongAgainst: ['grass', 'fighting'],
    weakTo: ['rock', 'electric', 'ice',]
  },
  ice: {
    strongAgainst: ['dragon', 'flying', 'grass'],
    weakTo: ['fire', 'fighting', 'rock']
  },
  dragon: {
    strongAgainst: ['dragon'],
    weakTo: ['ice', 'dragon']
  },
  fighting: {
    strongAgainst: ['ice', 'rock', 'normal', 'dark'],
    weakTo: ['psychic', 'flying']
  },
  psychic: {
    strongAgainst: ['fighting', 'poison'],
    weakTo: ['ghost', 'bug']
  },
  ghost: {
    strongAgainst: ['psychic', 'ghost'],
    weakTo: ['ghost']
  },
  poison: {
    strongAgainst: ['grass'],
    weakTo: ['psychic', 'ground']
  },
  dark: {
    strongAgainst: ['psychic', 'ghost'],
    weakTo: ['fighting', 'fairy', 'bug']
  }
}

export default type;
