import { Character } from "./types";
const BASE_URL = 'https://disney_api.nomadcoders.workers.dev/';

export async function fetchCharacters() {
    return fetch(`${BASE_URL}characters`).then(response => response.json())
        .then(data =>
            data.filter((character: Character) => character.imageUrl).slice(0, 200));
    //.sort(() => Math.random() - 0.5).slice(0, 200))
}
