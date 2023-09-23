import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
const BASE_URL = 'https://disney_api.nomadcoders.workers.dev/';
export default function Detail() {
    const { id } = useParams();
    async function fetchCharacter() {
        return fetch(`${BASE_URL}characters/${id}`).then(response => response.json());
    }

    const { isLoading, data } = useQuery(['character'], fetchCharacter)
    return (
        <DatailWrapper>
            {
                isLoading ? <span>Loading..</span> :
                    <div>
                        <img src={data?.imageUrl} />
                        <h2>{data?.name}</h2>
                        <div>
                            <h3>{data.name}'s Films</h3>
                            {data.films.map((film: string) => <span>{film}</span>)}
                        </div>

                        <Link target="_blank" to={data?.sourceUrl}>About {data.name} in Wiki</Link>
                    </div>
            }
        </DatailWrapper>
    );
}

const DatailWrapper = styled.div`
margin-top:5rem;
`