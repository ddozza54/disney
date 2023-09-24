import styled from "styled-components";
import { FaRegHandPointLeft } from 'react-icons/fa';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [scrollYPosition, setScrollYPosition] = useState(0);
    const updateScroll = () => {
        setScrollYPosition(window.scrollY || document.documentElement.scrollTop)
    }
    const handleLogoClick = (e: React.MouseEvent<HTMLImageElement>) => {
        if (e.currentTarget.id === 'logo_big' && scrollYPosition < 150) {
            navigate('/');
        }
        if (e.currentTarget.id === 'logo_small' && scrollYPosition >= 150) {
            navigate('/');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', updateScroll)
    }, [])

    return (
        <>
            <HeaderWrapper_Big scrolly={scrollYPosition}>
                {id ? <BackButton onClick={() => {
                    navigate('/')
                }}><FaRegHandPointLeft /></BackButton> : <div></div>
                }
                < Img_Big scrolly={scrollYPosition} id={'logo_big'} onClick={(e) => handleLogoClick(e)} src='src/assets/pngwing.png' width='250px' />
                <div></div>
            </HeaderWrapper_Big>

            <HeaderWrapper_Small scrolly={scrollYPosition}>
                {id ? <BackButton onClick={() => {
                    navigate('/')
                }}><FaRegHandPointLeft />
                </BackButton> : <div />}
                < Img_Small scrolly={scrollYPosition} id={'logo_small'} onClick={handleLogoClick} src='src/assets/pngwing.png' width='100px' />
                <div />
            </HeaderWrapper_Small>
        </>
    );
}

const HeaderWrapper_Big = styled.header<{ scrolly: number }>`
width: 100%;
height: 8rem;
padding: 2rem;
display: flex;
justify-content:space-between;
align-items: center;
position: sticky;
margin-bottom: 3rem;
opacity: ${props => props.scrolly < 150 ? 1 : 0};
  top: 0; 
  transition: all 0.8s;
`;
const HeaderWrapper_Small = styled(HeaderWrapper_Big) <{ scrolly: number }>`
height: 3rem;
padding: 0.8rem;
display: flex;
justify-content:space-between;
align-items: center;
position: fixed;
top:0;
z-index: 5;
opacity: ${props => props.scrolly >= 150 ? 1 : 0};
transition: all 0.5s;
background-color: #77ceeb;
`;
const BackButton = styled.div`
font-size: x-large;
border: none;
background-color: transparent;
padding: 0.5rem;
&:hover{
    cursor: pointer;
    scale: 1.1;
}
`;
const Img_Big = styled.img<{ scrolly: number }>`
    width: 250px;
    position: relative;
    &:hover{
    cursor:${props => props.scrolly < 150 ? 'pointer' : 'default'};
}
`
const Img_Small = styled.img<{ scrolly: number }>`
width: 100px;
    &:hover{
    cursor:${props => props.scrolly >= 150 ? 'pointer' : 'default'};
}
`