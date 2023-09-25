import { Character } from "./types";
const BASE_URL = 'https://disney_api.nomadcoders.workers.dev/';

export async function fetchCharacters() {
    return fetch(`${BASE_URL}characters`).then(response => response.json())
        .then(data =>
            data.filter((character: Character) => character.imageUrl).slice(0, 200));
}


export async function fetchCharacter(id: string) {
    return fetch(`${BASE_URL}characters/${id}`).then(response => response.json());
}