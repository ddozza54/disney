import styled from "styled-components";
import { FaRegHandPointLeft } from 'react-icons/fa';

export default function Header() {
    return (
        <HeaderWrapper>
            <button><FaRegHandPointLeft /></button>
            <h1>Disney Characters</h1>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.div`
width: 100%;
height: 5rem;
background-color: blueviolet;
`
