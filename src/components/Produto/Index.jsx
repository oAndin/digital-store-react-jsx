import { useRef } from "react";
import { styled } from "styled-components";

const Produto = () => {

  const desconto = useRef(false);

  return (
    <>
      <ProdutoContainer>
        <ProdutoImagem>

        </ProdutoImagem>
      </ProdutoContainer>
    </>
  )
}

const ProdutoContainer = styled.div`
  width: 292px;
  height: 439px;
  /* border: 1px solid #000; */
`;

const ProdutoImagem = styled.div`
  width: 292px;
  height: 321px;
  border-radius: 4px;
  background: #FFF;
  box-shadow: 6px 16px 30px 0px rgba(105, 98, 98, 0.05);
`;

export default Produto;