const playableCharacters = [
  {
    name: 'Amanda',
    characterName: 'Winnie',
    image_url: '',
    race: 'gnome',
    class: 'cleric',
    isNpc: true,
    HP: 100,
    THP: 5,
    conditions: [],
    initiative: 1,
    deathSaves: 0,
    deathFails: 0
  },
];

const nonPlayableCharacters = [
  {
    name: '',
    characterName: 'Dastan',
    image_url: '',
    race: 'human',
    class: 'rogue',
    HP: 100,
    THP: 5,
    conditions: [],
    initiative: 1,
    deathSaves: 0,
    deathFails: 0
  },
  {
    name: '',
    characterName: 'Travis',
    image_url: '',
    race: 'elf',
    class: 'ranger',
    HP: 100,
    THP: 5,
    conditions: [],
    initiative: 1,
    deathSaves: 0,
    deathFails: 0
  },
];


module.exports = {
  playableCharacters,
  nonPlayableCharacters
};
