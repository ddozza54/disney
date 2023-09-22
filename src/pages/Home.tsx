import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../api';
import styled from 'styled-components';
import { Character } from '../types';

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
                                    <Profile>
                                        <ProfileImgFrame>
                                            <ProfileImg src={character.imageUrl} />
                                        </ProfileImgFrame>
                                        <ProfileName>{character.name}</ProfileName>
                                    </Profile>
                                </li>
                            ))}
                        </Chracters>
                    </ul>)
            }
        </>
    );
}

const Chracters = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
grid-template-rows: auto;
`

const Profile = styled.div`
    background-color: bisque;
    width: 10rem;
    height: 10rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ProfileImgFrame = styled.div`
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    overflow: hidden;
`
const ProfileImg = styled.img`
width: 7rem;
object-fit: cover;
`
const ProfileName = styled.h3`
    margin-top: 0.5rem;
`