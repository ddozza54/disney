import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Character } from '../types';

export default function Profile({ id, imageUrl, name }: Character) {
    const navigate = useNavigate();
    return (
        <ProfileWrapper>
            <ProfileImgFrame onClick={() => { navigate(`character/${id}`) }}>
                <ProfileImg src={imageUrl} />
            </ProfileImgFrame>
            <ProfileName>{name}</ProfileName>
        </ProfileWrapper>
    );
}


const ProfileWrapper = styled.div`
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
    transition: all 0.3s ease-in-out;
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