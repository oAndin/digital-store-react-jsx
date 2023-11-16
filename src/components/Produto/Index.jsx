import { styled } from "styled-components";

const Produto = () => {
  return (
    <>
      <ProdutoContainer>
        <h1>Produto nome</h1>
      </ProdutoContainer>
    </>
  )
}

const ProdutoContainer = styled.div`
  width: 292px;
  height: 439px;
  border: 1px solid #000;
`;

export default Produto;