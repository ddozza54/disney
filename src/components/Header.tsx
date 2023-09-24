import styled from "styled-components";
import { FaRegHandPointLeft } from 'react-icons/fa';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [scrollYPosition, setScrollYPosition] = useState(0);
    const updateScroll = () => {
        scrollYPosition < 200 ?
            setScrollYPosition(window.scrollY || document.documentElement.scrollTop)
            : setScrollYPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(() => {
        window.addEventListener('scroll', updateScroll)
    }, [])
    console.log(scrollYPosition)

    return (
        <>
            {scrollYPosition < 200 && !id ? (
                <HeaderWrapper_Big scrolly={scrollYPosition}>
                    {id ? <BackButton onClick={() => {
                        navigate('/')
                    }}><FaRegHandPointLeft /></BackButton> : <div></div>
                    }
                    <img src='src/assets/pngwing.png' width='250px' />
                    <div></div>
                </HeaderWrapper_Big>

            ) : (
                <HeaderWrapper_Small>
                    {id ? <BackButton onClick={() => {
                        navigate('/')
                    }}><FaRegHandPointLeft /></BackButton> : <div></div>
                    }
                    <img src='src/assets/pngwing.png' width='100px' />
                    <div></div>
                </HeaderWrapper_Small>
            )}
        </>
    );
}

const HeaderWrapper_Big = styled.header<{ scrolly: number }>`
width: 100%;
height:8rem;
padding: 2rem;
display: flex;
justify-content:space-between;
align-items: center;
/* position: fixed; */
margin-bottom: 3rem;
opacity: ${props => props.scrolly < 150 ? 1 : 0};
`;
const HeaderWrapper_Small = styled.header`
width: 100%;
height:3rem;
padding: 0.8rem;
display: flex;
justify-content:space-between;
align-items: center;
position: fixed;
top: 0;
z-index: 5;
background-color: #77ceeb;
`;
const BackButton = styled.div`
font-size: x-large;
border: none;
background-color: transparent;
padding: 1rem;
&:hover{
    cursor: pointer;
    scale: 1.1;
}
`;