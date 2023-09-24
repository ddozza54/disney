import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../api';
import styled from 'styled-components';
import { Character } from '../types';
import Profile from '../components/Profile';

export default function Home() {
    const { isLoading, data } = useQuery(["allCharacters"], fetchCharacters)
    return (
        <>
            {
                isLoading ?
                    <span>Loading...</span> :
                    (<ul>
                        <Chracters>
                            {data?.map((character: Character) => (
                                <li key={character.id}>
                                    <Profile
                                        id={character.id}
                                        imageUrl={character.imageUrl}
                                        name={character.name}
                                    />
                                </li>
                            ))}
                        </Chracters>
                    </ul>)
            }
        </>
    );
}

const Chracters = styled.div`
    width: 90%;
    height: 100vh;
    display: grid;
    padding: 0 2rem;
    grid-column-gap: 0.5rem;
    grid-row-gap: 3rem;
    grid-template-columns: repeat(4, 1fr);
grid-template-rows: auto;
`
