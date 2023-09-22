import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../api';
import styled from 'styled-components';

interface Character {
    "id": number,
    "name": string,
    "imageUrl": string
}

export default function Home() {
    const { isLoading, data } = useQuery(["allCharacters"], fetchCharacters)

    return (
        <div>
            {isLoading ?
                <span>Loading...</span> :
                (<ul>
                    {data?.map((character: Character) => (
                        <li key={character.id}>
                            <Profile>
                                <img src={character.imageUrl} />
                                <h3>{character.name}</h3>
                            </Profile>
                        </li>

                    ))}
                </ul>)
            }
        </div>
    );
}

const Profile = styled.div`
    background-color: bisque;
`