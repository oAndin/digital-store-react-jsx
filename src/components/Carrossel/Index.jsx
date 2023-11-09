import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import nikeshoes from '/src/AssetsGeneral/Nike-Shoes.png'

const Carrossel = () => {

    const [position, setPosition] = useState(0);

    return (
        <>
            <Background>
                <CarrosselContainer>
                    <CarrosselSlides $position={position}>
                        <CarrosselSlide>
                            <CarrosselContent>
                                <h6>Melhores ofertas personalizadas</h6>
                                <h2>Queima de estoque Nike 🔥</h2>
                                <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                                <Link>Ver Ofertas</Link>
                            </CarrosselContent>
                            <Imagem>
                            </Imagem>
                        </CarrosselSlide>
                        <CarrosselSlide>2</CarrosselSlide>
                        <CarrosselSlide>3</CarrosselSlide>
                        <CarrosselSlide>4</CarrosselSlide>
                    </CarrosselSlides>
                    <CarrosselDots>
                        <CarrosselDot className={position == 0 && 'active'} onClick={() => setPosition(0)}></CarrosselDot>
                        <CarrosselDot className={position == 1 && 'active'} onClick={() => setPosition(1)}></CarrosselDot>
                        <CarrosselDot className={position == 2 && 'active'} onClick={() => setPosition(2)}></CarrosselDot>
                        <CarrosselDot className={position == 3 && 'active'} onClick={() => setPosition(3)}></CarrosselDot>
                    </CarrosselDots>

                </CarrosselContainer>
            </Background>
        </>
    )
}

const Background = styled.div`
background-color:#F5F5F5;
width: 100%;
`;

const Imagem = styled.div`
    position: absolute;
    top: 20px;
    left: 560px;
    width: 733px;
    height: 500px;
    background: url(${nikeshoes}) center;
`;

const CarrosselContainer = styled.div`
width: 100%;
height: 580px;
overflow: hidden;
position: relative;
`;

const CarrosselSlides = styled.div`
display: flex;
width: 300%;
position:absolute;
top:0;
left: calc( -100% * ${props => props.$position || 0});
transition: all 0.5s ease-in-out;
`;
const CarrosselSlide = styled.div`
width: 100%;
`;

const CarrosselContent = styled.div`
    height: 352px;
    margin-left: 100px;
    margin-top: 78px;
    
    & h6{
        color: #F6AA1C;
        font-size: 16px;
        font-weight: 700px;
        line-height: 24px;
        letter-spacing: 0.75px;
        margin-bottom: 20px;
    }
    
    & h2 { 
        color: #1F1F1F;
        width: 527px;
        font-size: 64px;
        line-height: 66px;
        letter-spacing: 1px;
        margin-bottom: 20px;
}
& p {
    color: #474747;
    width: 495px;
    font-size: 18px;
    line-height: 34px;
    letter-spacing: 0.75px;
    margin-bottom: 40px;
}

& a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 220px;
    height: 48px;
    border-radius:4px;
    background-color: #C92071;
    color: #fff;
}
`;

const CarrosselDots = styled.div`
display: flex;
gap: 10px;
position: absolute;
bottom: 10%;
left: 50%;
z-index: 10;
transform: translateX(-50%);
`;
const CarrosselDot = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 100%;
    cursor: pointer;
    background-color: #CCCCCC;
    &.active{
        background-color: #C92071;
    }
`;

export default Carrossel;