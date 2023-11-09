import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Carrossel = () => {
    
    

    const [position, setPosition] = useState(0);

    return (
        <>
            <CarrosselContainer>
                <CarrosselSlides $position={position}>
                    <CarrosselSlide>
                        <CarrosselContent>
                            1   
                            <h6></h6>
                            <h2></h2>
                            <p></p>
                            <Link></Link>
                        </CarrosselContent>
                    </CarrosselSlide>
                    <CarrosselSlide>2</CarrosselSlide>
                    <CarrosselSlide>3</CarrosselSlide>
                </CarrosselSlides>
                <CarrosselDots>
                    <CarrosselDot className={position == 0 && 'active'} onClick={ () => setPosition(0)}></CarrosselDot>
                    <CarrosselDot className={position == 1 && 'active'} onClick={ () => setPosition(1)}></CarrosselDot>
                    <CarrosselDot className={position == 2 && 'active'} onClick={ () => setPosition(2)}></CarrosselDot>
                </CarrosselDots>
            </CarrosselContainer>
        </>
    )
}

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
& h6{

}

& h2 {

}
& p {

}

& a {

}
`;

const CarrosselDots = styled.div`
display: flex;
gap: 10px;
position: absolute;
bottom: 53px;
left: 50%;
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