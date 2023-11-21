import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { useMarcas } from "../../hooks/useMarcas";
import { API } from "../../services";

const ListarProdutos = () => {

  const [marcas, setMarcas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [genero, setGenero] = useState([]);
  const [estado, setestado] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [loadingMarcas, setLoadingMarcas] = useState();

  const dataMarcas = useMarcas();

  const getProdutos = () => {
    fetch("http://localhost:5000/produtos")
      .then((response) => response.json())
      .then((response) => {
        setProdutos(response);
      })
      .catch((err) => console.log(err));
  }

  const getMarcas = async () => {
    try {
      const response = await API.get('marcas');
      setLoadingMarcas(false);
      if (response.data) {
        setMarcas(response.data)
      }
    } catch (error) {
      console.log(error);
    }
    // fetch('http://localhost:5000/marcas')
    //   .then((response) => response.json())
    //   .then((response) => {
    //     setMarcas(response)
    //   })
    //   .catch((err) => console.log(err))
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
    fetch('http://localhost:5000/estados')
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
    getProdutos();
  }, []);

  return (
    <>
      <ListarProdutosContainer>
        <ListarProdutosFilter>
          {loadingMarcas && (
            <h1>Loading</h1>
          )}
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
                  <input type="radio" name={'estado'} value={`estado${estado.id}`} id={`estado${estado.id}`} />
                  <span className="radio"></span>
                  {estado.estado}
                </label>
              </li>
            ))}
          </ul>
        </ListarProdutosFilter>
        <ListarProdutosList>
          <ul>
            {produtos.map(produto =>
            (
              <ProdutoContainer key={produto.id}>
                <ProdutoImagem src={produto.img} />
                <h5>{produto.categoria}</h5>
                {/* <ProdutoImagem>
                  <img src={produto.img} alt="Imagem do Produto" />
                </ProdutoImagem> */}
                <h2>{produto.name}</h2>
                <h3>{produto.preco}</h3>
              </ProdutoContainer>
            )
            )}
          </ul>
        </ListarProdutosList>
      </ListarProdutosContainer>
    </>
  )
}

const ProdutoContainer = styled.li`
  width: 292px;
  height: 439px;
  /* border: 1px solid #000; */
  & h2 {
    /* width: 283px; */
    height: 38px;
    font-size: 24px;
    line-height: 38px;
    /* letter-spacing: 0.75px; */
    color: #474747;
    font-weight: 400;
  }
  & ul {
    & li {
      display: flex;
      gap: 10px;
    }
  }


`;

const ProdutoImagem = styled.img`
  width: 292px;
  height: 321px;
  object-fit: cover;
  border-radius: 4px;
  background: #FFF;
  box-shadow: 6px 16px 30px 0px rgba(105, 98, 98, 0.05);
`;

const ListarProdutosList = styled.div`
  flex: 1;
  display: grid;
  gap: 14px;
  width: 904px;
  height: 100%;
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