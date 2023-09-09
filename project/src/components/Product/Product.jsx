import React from "react";
import { Produto, Preco, AdicionarCarrinho } from "./styles"

export default function Product(props) {
    const { product, onAdd, adicionarCarrinho } = props;
    return (
        <Produto>
            <img className="small" src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <Preco>
                Preço: R$ {product.price.toFixed(2)}
            </Preco>
            <AdicionarCarrinho>
                <button onClick={() => onAdd(product)}>Adicionar ao carrinho</button>
            </AdicionarCarrinho>
        </Produto>
    )
}