import React from "react";
import Product from "../Product/Product";
import { ContainerMain, Filtros, ContainerProduto } from './styles'
import Carrinho from '../Carrinho/Carrinho'

export default function Main(props) {

    const { products, onAdd, pesquisa, ordem, valorMinimo, valorMaximo } = props;


    const handleSearch = (e) => {
        props.setPesquisa(e.target.value);
    };

    const handleOrdem = (e) => {
        props.setOrdem(e.target.value)
    }

    const handleValorMinimo = (e) => {
        props.setValorMinimo(e.target.value)
    }
    const handleValorMaximo = (e) => {
        props.setValorMaximo(e.target.value)
    }

    return (
        <ContainerMain>
            <Filtros>
                <input
                    type="text"
                    placeholder="Buscar por nome"
                    onChange={handleSearch}
                    value={pesquisa}
                />
                <input
                    type="number"
                    placeholder="Valor mínimo"
                    onChange={handleValorMinimo}
                    value={valorMinimo}
                />
                <input
                    type="number"
                    placeholder="Valor máximo"
                    onChange={handleValorMaximo}
                    value={valorMaximo}
                />
                <select onChange={handleOrdem}>
                    <option value="">Ordenar</option>
                    <option value="Crescente">Crescente</option>
                    <option value="Decrescente">Decrescente</option>
                </select>
            </Filtros>
            <ContainerProduto>
                {products.filter((product) => {
                    return product.name.toLowerCase().includes(pesquisa.toLowerCase());
                })
                    .filter((product) => {
                        return (valorMinimo === "" || product.price >= valorMinimo);
                    })
                    .filter((product) => {
                        return (valorMaximo === "" || product.price <= valorMaximo);
                    })
                    .sort((a, b) => {
                        if (ordem.toLowerCase() === "crescente") {
                            if (a.price < b.price) {
                                return -1
                            } else {
                                return true
                            }
                        }
                        if (ordem.toLowerCase() === "decrescente") {
                            if (a.price > b.price) {
                                return -1
                            } else {
                                return true
                            }
                        }
                    })
                    .map((product) => (
                        <Product key={product.id} product={product} onAdd={onAdd}></Product>
                    ))}
            </ContainerProduto>
        </ContainerMain>
    )
}