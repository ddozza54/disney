import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function ErrorPage() {
    return (
        <ErrorWrapper>
            <img src='https://i.pinimg.com/originals/9d/a3/d6/9da3d6fcc830a56060a826f783726162.gif' width='300px' />
            <span>Sorry, an unexpected error has occured</span>
            <Link to='/'>Back to Home</Link>
        </ErrorWrapper>
    );
}

const ErrorWrapper = styled.div`
    width: 100%;
    padding: 3rem;
    display:  flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
