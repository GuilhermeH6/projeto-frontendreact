import React from "react";
import { FeedProdutos, Total } from "./styles";

export default function Carrinho(props) {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qntd, 0)
    const frete = itemsPrice > 75000 ? 0 : 2000;
    const totalPrice = itemsPrice + frete;
    return (
        <aside className="block col-1">
            
            <FeedProdutos>
            <h2>Carrinho:</h2>
            <div>
                {cartItems.length === 0 && <div>O carrinho está vázio</div>}
            </div>
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className="nome-carrinho">
                        {item.name}
                    </div>
                    <div className="preco">
                        {item.qntd} x R${item.price.toFixed(2)}
                    </div>
                    <div className="botao">
                        <button onClick={() => onAdd(item)} className="add"> + </button>
                        <button onClick={() => onRemove(item)} className="remove"> - </button>
                    </div>       
                </div>

            ))}
            </FeedProdutos>

            {cartItems.length !== 0 && (
                <Total>
                    <hr></hr>
                    <div className="row">
                        <div className="col-2">Preço dos itens:</div>
                        <div className="col-1 text-right">R${itemsPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Frete:</div>
                        <div className="col-1 text-right">R${frete.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Valor total:</div>
                        <div className="col-1 text-right"><strong>R${totalPrice.toFixed(2)}</strong></div>
                    </div>
                    <hr />
                    <div className="row">
                        <button onClick={() => alert('Seu pedido foi feito!')}>
                            Comprar
                        </button>
                    </div>
                </Total>
            )}
        </aside>
    )
}