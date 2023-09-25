import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchCharacter } from '../api';
import ScrollToTopOnMount from '../hooks/ScrollToTopOnMount';

export default function Detail() {
    const { id } = useParams();
    const { isLoading, data } = useQuery(['character'], () => fetchCharacter(id))
    return (
        <DatailWrapper>
            <ScrollToTopOnMount />
            {
                isLoading ? <span>Loading..</span> :
                    <CharacterDetail>
                        <CharacterImg src={data?.imageUrl} />
                        <CharacterTitle>{data?.name}</CharacterTitle>
                        <FilmWrapper>
                            <FilmTitle>❄️{data.name}'s Films❄️</FilmTitle>
                            <ul>
                                {data.films.map((film: string, i: number) => <FilmListItem key={i} >{film}</FilmListItem>)}
                            </ul>
                        </FilmWrapper>

                        <WikiLink target="_blank" to={data?.sourceUrl}>About {data.name} in Wiki</WikiLink>
                    </CharacterDetail>
            }
        </DatailWrapper>
    );
}

const DatailWrapper = styled.div`
width: 100%;
margin-top:7rem;
height: 60%;
display: flex ;
justify-content: center;
align-content: flex-start;
padding-left: 3.5rem;
`;
const CharacterDetail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
const CharacterImg = styled.img`
border-radius: 1rem;
box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.12);
-webkit-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.12);
-moz-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.12);
`
const CharacterTitle = styled.h2`
font-size: 2rem;
margin: 2rem 0;
`;
const FilmWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 1rem 0;
`
const FilmTitle = styled.h3`
font-size: larger;
margin-bottom: 0.5rem;
`
const FilmListItem = styled.li`
    color: #6180af;
`;
const WikiLink = styled(Link)`
    text-decoration: none;
    color: #3498db;
    &:hover{
        scale: 1.1;
    }
`
