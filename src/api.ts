export async function fetchCharacters() {
    const BASE_URL = 'https://disney_api.nomadcoders.workers.dev/';
    return fetch(`${BASE_URL}characters`).then(response => response.json())
}