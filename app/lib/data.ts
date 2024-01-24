import { sql } from '@vercel/postgres';
import {
  Character
} from './definitions';

export async function fetchFilteredCustomers(query: string) {
  try {
    const data = await sql<Character>`
		SELECT
		  character.name,
		  character.characterName, 
		  character.image_url,
		  character.race,
		  character.class,
		  character.HP,
		  character.THP,
		  character.conditions,
		  character.initiative, 
		  character.deathFails,
		  character.deathSaves,
		ORDER BY customers.initiative ASC
	  `;

    const characters = data.rows.map((character) => ({
      ...character,
    }));
    return characters;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
  }}
