import { styled } from "styled-components";
import Produto from "../Produto/Index";
import { useEffect, useState } from "react";

const ListarProdutos = () => {

  const [marcas, setMarcas] = useState([]);


  const getms = () => {
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
  useEffect(() => {
    getms()
  }, []);

  return (
    <>
      <ListarProdutosContainer>
        <ListarProdutosFilter>
          <h5>Filtrar por</h5>
          <Linha />
          <h6>m</h6>
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
            {/* 
            <li>
              <label htmlFor="m1">
                <input type="checkbox" name="abiddas" id="m1" />
                <span></span>
                Abiddas
              </label>
            </li>
            <li>
              <label htmlFor="m2">
                <input type="checkbox" name="cadenciaga" id="m2" />
                <span></span>
                Cadenciaga
              </label>
            </li>
            <li>
              <label htmlFor="m3">
                <input type="checkbox" name="Mike" id="m3" />
                <span></span>
                Mikke
              </label>
            </li>
            <li>
              <label htmlFor="m4">
                <input type="checkbox" name="Luma" id="m4" />
                <span></span>
                Luma
              </label>
            </li> */}
          </ul>
          <h6>Categoria</h6>
          <ul>
            <li>
              <label htmlFor="m1Cat">
                <input type="checkbox" name="esporta-e-lazer" id="m1Cat" />
                <span></span>
                Esporte e lazer
              </label>
            </li>
            <li>
              <label htmlFor="m2Cat">
                <input type="checkbox" name="casual" id="m2Cat" />
                <span></span>
                Casual
              </label>
            </li>
            <li>
              <label htmlFor="m3Cat">
                <input type="checkbox" name="utilitario" id="m3Cat" />
                <span></span>
                Utilitário
              </label>
            </li>
            <li>
              <label htmlFor="m4Cat">
                <input type="checkbox" name="corrida" id="m4Cat" />
                <span></span>
                Corrida
              </label>
            </li>
          </ul>
          <h6>Gênero</h6>
          <ul id='genero'>
            <li>
              <label htmlFor="Masculino">
                <input type="checkbox" name="Masculino" id="Masculino" />
                <span></span>
                Masculino
              </label>
            </li>
            <li>
              <label htmlFor="Feminino">
                <input type="checkbox" name="Feminino" id="Feminino" />
                <span></span>
                Feminino
              </label>
            </li>
            <li>
              <label htmlFor="Unisex">
                <input type="checkbox" name="Unisex" id="Unisex" />
                <span></span>
                Unisex
              </label>
            </li>
          </ul>
          <h6>Estado</h6>
          <ul>
            <li>
              <label htmlFor="novo">
                <input type="radio" name="estado" id="novo" />
                <span className="radio"></span>
                Novo
              </label>
            </li>
            <li>
              <label htmlFor="usado">
                <input type="radio" name="estado" id="usado" />
                <span className="radio"></span>
                Usado
              </label>
            </li>
          </ul>
        </ListarProdutosFilter>
        <ListarProdutosList>
          <Produto />
        </ListarProdutosList>
      </ListarProdutosContainer>
    </>
  )
}

const ListarProdutosContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
padding: 140px 100px;
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
const ListarProdutosList = styled.div`
  flex: 1;
  /* border: 1px solid #aaff00; */
`;

const Linha = styled.div`
  width: 100%;
  margin: 20px 0;
  border: 1px solid #CCC;
`;


export default ListarProdutos;