import styled from "styled-components";
import { FaRegHandPointLeft } from 'react-icons/fa';
import { useNavigate, useParams } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const { id } = useParams();
    return (
        <HeaderWrapper>
            {id ? <BackButton onClick={() => {
                navigate('/')
            }}><FaRegHandPointLeft /></BackButton> : <div></div>
            }

            <img src='src/assets/pngwing.png' width='300px' />
            <div></div>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.div`
width: 100%;
padding: 1rem;
display: flex;
justify-content:space-between;
align-items: center;
`
const BackButton = styled.div`
border: none;
background-color: transparent;
`;