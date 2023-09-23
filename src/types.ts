export interface Character {
    "id": number,
    "name": string,
    "imageUrl": string
}

export interface CharacterDetail {
    "id": number,
    "films": string[],
    "name": string,
    "imageUrl": string,
    "sourceUrl": string,
}