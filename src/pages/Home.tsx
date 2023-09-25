import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../api';
import styled from 'styled-components';
import { Character } from '../types';
import Profile from '../components/Profile';
import LoadingBar from 'react-top-loading-bar';
import { useEffect, useState } from 'react';
import ScrollToTopOnMount from '../hooks/ScrollToTopOnMount';


export default function Home() {
    const { isLoading, data } = useQuery(["allCharacters"], fetchCharacters)
    const [progress, setProgress] = useState(10);
    useEffect(() => {
        isLoading ? setProgress(progress + 10) : setProgress(progress + 90)
    }, [isLoading])
    return (
        <>
            <ScrollToTopOnMount />
            {
                isLoading ?
                    (<div>
                        <LoadingBar color="blue" progress={progress}
                            onLoaderFinished={() => setProgress(0)} />
                        <span>Loading...</span>
                    </div>) :
                    (<UI>
                        <Chracters>
                            <LoadingBar color="blue" progress={progress}
                                onLoaderFinished={() => setProgress(100)} />
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
                    </UI>)
            }
        </>
    );
}

const Chracters = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    padding: 0 2rem;
    grid-column-gap: 0.5rem;
    grid-row-gap: 3rem;
    grid-template-columns: repeat(4, 1fr);
grid-template-rows: auto;
`
const UI = styled.ul`
    width: 100%;
    justify-content: center;
`