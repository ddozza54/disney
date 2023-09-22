import { Character } from "./types";

export async function fetchCharacters() {
    const BASE_URL = 'https://disney_api.nomadcoders.workers.dev/';
    return fetch(`${BASE_URL}characters`).then(response => response.json())
        .then(data =>
            data.filter((character: Character) => character.imageUrl).sort(() => Math.random() - 0.5).slice(0, 200));
}