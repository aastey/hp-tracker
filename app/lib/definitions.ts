
export type Character = {
  name: string,
  characterName: string,
  image_url: string,
  race: string,
  class: string,
  HP: number,
  THP: number,
  conditions: Array<any>,
  initiative: number,
  deathSaves: number,
  deathFails: number
};
