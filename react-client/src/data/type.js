
const type = {
  grass: {
    strongAgainst: ['water'],
    weakTo: ['fire'],
  },
  fire: {
    strongAgainst: ['grass'],
    weakTo: ['water'],
  },
  water: {
    strongAgainst: ['fire'],
    weakTo: ['grass'],
  },
}

export default type;
