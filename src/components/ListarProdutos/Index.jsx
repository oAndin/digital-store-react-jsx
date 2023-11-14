import { styled } from "styled-components";

const ListarProdutos = () => {
  return (
    <>
      <ListarProdutosContainer>
        <ListarProdutosFilter>
          <h5>Filtrar por</h5>
          <Linha />
          <h6>Marca</h6>
          <ul>
            <li>
              <label htmlFor="marca1">
                <input type="checkbox" name="abiddas" id="marca1" />
                <span></span>
                Abiddas
              </label>
            </li>
            <li>
              <label htmlFor="marca2">
                <input type="checkbox" name="cadenciaga" id="marca2" />
                <span></span>
                Cadenciaga
              </label>
            </li>
            <li>
              <label htmlFor="marca3">
                <input type="checkbox" name="Mike" id="marca3" />
                <span></span>
                Mikke
              </label>
            </li>
            <li>
              <label htmlFor="marca4">
                <input type="checkbox" name="Luma" id="marca4" />
                <span></span>
                Luma
              </label>
            </li>
          </ul>
          <h6>Categoria</h6>
          <ul>
            <li>
              <label htmlFor="marca1">
                <input type="checkbox" name="abiddas" id="marca1" />
                <span></span>
                Abiddas
              </label>
            </li>
            <li>
              <label htmlFor="marca2">
                <input type="checkbox" name="cadenciaga" id="marca2" />
                <span></span>
                Cadenciaga
              </label>
            </li>
            <li>
              <label htmlFor="marca3">
                <input type="checkbox" name="Mike" id="marca3" />
                <span></span>
                Mikke
              </label>
            </li>
            <li>
              <label htmlFor="marca4">
                <input type="checkbox" name="Luma" id="marca4" />
                <span></span>
                Luma
              </label>
            </li>
          </ul>
        </ListarProdutosFilter>
        <ListarProdutosList>
          <h1>Lista</h1>
        </ListarProdutosList>
      </ListarProdutosContainer>
    </>
  )
}

const ListarProdutosContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
padding: 0 100px;
gap: 28px;
background-color: #f5f5f5;
border: 1px solid #ff0000;
`;
const ListarProdutosFilter = styled.div`
  width: 310px;
  height: 100%;
  padding: 30px;
  background-color: #fff;
  border-radius: 5px;

  & ul {
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  & ul li label {
    accent-color: #C92071;
    height:22px;
    display: flex;
    gap: 10px;
    align-items: center;
    & input {
      width: 22px;
      height: 22px;
      opacity: 0;
      &:checked + span {
        background-color: #C92071;
        border-color: #c92071;
      }
    }
    & span {
      width: 22px;
      height: 22px;
      border-radius: 2px;
      border: 1px solid #666;
      position: absolute;
      &::after{
        content: '';
        width: 12px;
        height: 6px;
        border-left: 2px solid #fff;
        border-bottom: 2px solid #fff;
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%, -65%) rotate(-45deg);
      }
    }
  }
`;
const ListarProdutosList = styled.div`
  flex: 1;
  border: 1px solid #aaff00;
`;

const Linha = styled.div`
  width: 100%;
  margin: 20px 0;
  border: 1px solid #CCC;
`;


export default ListarProdutos;