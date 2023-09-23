import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../api';
import styled from 'styled-components';
import { Character } from '../types';
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const { isLoading, data } = useQuery(["allCharacters"], fetchCharacters)
    const navigate = useNavigate();

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
                                        <ProfileImgFrame onClick={() => { navigate(`character/${character.id}`) }}>
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
    margin-top: 4rem;
    display: grid;
    grid-column-gap: 0.5rem;
    grid-row-gap: 3rem;
    grid-template-columns: repeat(4, 1fr);
grid-template-rows: auto;
`

const Profile = styled.div`
    width: auto;
    height: 10rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0px 0px 25px -4px rgba(255,255,255,0.75);
-webkit-box-shadow: 0px 0px 25px -4px rgba(255,255,255,0.75);
-moz-box-shadow: 0px 0px 25px -4px rgba(255,255,255,0.75);

    &:hover{
        cursor: pointer;
        transform:scale(1.1);
    background-color: rgba(255, 255, 255, 0.8);
    transition: all 0.3s;
    }
`;

const ProfileImgFrame = styled.div`
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    overflow: hidden;
`
const ProfileImg = styled.img`
width: 11rem;
object-fit: cover;
`
const ProfileName = styled.h3`
    margin-top: 0.5rem;
`