import { useContext } from "react";
import { ItemsCartContext } from "../../contexts/ItemsCartContext/Index";
import './index.css';

const ItemsCart = () => {
    const { itensCarrinho } = useContext(ItemsCartContext);
    return (
        <>
            {itensCarrinho.map((itemCarrinho) => (
                <div id="item-do-carrinho"
                    key={itemCarrinho.id}>
                    <img id='imagem-produto' src={itemCarrinho.img} alt="imagem do produto" />
                    <div id='cima-baixo'>
                        <h1 id="titulo">{itemCarrinho.name}</h1>
                        <h1 id="preco">R$ {itemCarrinho.preco}</h1>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ItemsCart