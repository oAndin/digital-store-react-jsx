import { styled } from "styled-components";
import Produto from "../Produto/Index";
import { useEffect, useState } from "react";

const ListarProdutos = () => {

  const [marcas, setMarcas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [genero, setGenero] = useState([]);
  const [estado, setestado] = useState([]);


  const getMarcas = () => {
    fetch('http://localhost:5000/marcas')
      // ,{
      //   method: "GET",
      //   headers: {
      //     "Content-type": "application-json"
      //   }
      // })
      .then((response) => response.json())
      .then((response) => {
        setMarcas(response)
      })
      .catch((err) => console.log(err))
  };
  const getCategorias = () => {
    fetch('http://localhost:5000/categorias')
      // ,{
      //   method: "GET",
      //   headers: {
      //     "Content-type": "application-json"
      //   }
      // })
      .then((response) => response.json())
      .then((response) => {
        setCategorias(response)
      })
      .catch((err) => console.log(err))
  };

  const getGenero = () => {
    fetch('http://localhost:5000/genero')
      .then((response) => response.json())
      .then((response) => {
        setGenero(response)
      })
      .catch((error) => (console.log(error)))
  };

  const getEstado = () => {
    fetch('http://localhost:5000/genero')
      .then((response) => response.json())
      .then((response) => {
        setestado(response)
      })
      .catch((error) => (console.log(error)));
  }

  useEffect(() => {
    getMarcas();
    getCategorias();
    getGenero();
    getEstado();
  }, []);

  return (
    <>
      <ListarProdutosContainer>
        <ListarProdutosFilter>
          <h5>Filtrar por</h5>
          <Linha />
          <h6>Marcas</h6>
          <ul>
            {
              marcas.map(m => (
                <li key={m.id}>
                  <label htmlFor={`marca${m.id}`}>
                    <input type="checkbox" name={m.name} id={`m${m.id}`} />
                    <span></span>
                    {m.name}
                  </label>
                </li>
              ))
            }
          </ul>
          <h6>Categoria</h6>
          <ul>
            {
              categorias.map(categoria => (
                <li key={categoria.id}>
                  <label htmlFor={`categoria${categoria.id}`}>
                    <input type="checkbox" name={categoria.name} id={`categoria${categoria.id}`} />
                    <span></span>
                    {categoria.name}
                  </label>
                </li>
              ))
            }
          </ul>
          <h6>Gênero</h6>
          <ul id='genero'>
            {genero.map(genero => (
              <li key={genero.id}>
                <label htmlFor={`genero${genero.id}`}>
                  <input type="checkbox" name={genero.name} id={`genero${genero.id}`} />
                  <span></span>
                  {genero.name}
                </label>
              </li>
            ))}
          </ul>
          <h6>Estado</h6>
          <ul>
            {estado.map(estado => (
              <li key={estado.id}>
                <label htmlFor={`estado${estado.id}`}>
                  <input type="radio" name={estado.name} id={`estado${estado.id}`} />
                  <span className="radio"></span>
                  {estado.name}
                </label>
              </li>
            ))}
          </ul>
        </ListarProdutosFilter>
        <ListarProdutosList>
          <Produto />
          <Produto />
          <Produto />
          <Produto />
        </ListarProdutosList>
      </ListarProdutosContainer>
    </>
  )
}

const ListarProdutosList = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  width: 904px;
  height: 918px;
  border: 1px solid #aaff00;
`;

const ListarProdutosContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
padding: 140px 100px;
gap: 28px;
background-color: #f5f5f5;
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
    cursor: pointer;
    align-items: center;
    & input {
      width: 22px;
      height: 22px;
      opacity: 0;
      &:checked + span {
        background-color: #C92071;
        border-color: #c92071;
        &.radio::after{
          content:'';
          justify-content: center;
          align-items: center;
          width: 75%;
          height: 75%;
          border-radius: 100%;
          display: flex;
          top:0;
          left:0;
          transform: none;
          border: 3px solid #fff;
        }
      }
    }
    & span {
      width: 22px;
      height: 22px;
      border-radius: 2px;
      border: 1px solid #666;
      position: absolute;
      &.radio{
        border-radius: 100%; 
        padding: 2px;
        /* width: 18px;
        height: 18px; */
        &::after {
          border:0;
        }
      }
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


const Linha = styled.div`
  width: 100%;
  margin: 20px 0;
  border: 1px solid #CCC;
`;


export default ListarProdutos;