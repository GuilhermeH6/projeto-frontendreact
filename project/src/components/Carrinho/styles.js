import styled from 'styled-components'

export const FeedProdutos = styled.div`
    margin-top: 30px;
    display: flex;
    gap: 16px;
    flex-direction: column;
    width: 600px;
    padding: 10px;


    .add {
        background-color: green;
        width: 1.5rem;
        cursor: pointer;
        border: none;
        border-radius: 8px;
        padding:3px;
    }
    .remove {
        background-color: red;
        width: 1.5rem;
        cursor: pointer;
        border: none;
        border-radius: 8px;
        padding:3px;
    }

    .botao {
        display: flex;
        gap: 2px;
        
    }

    .nome-carrinho {
        display: flex;
        margin-bottom: 3px;
        font-size: 18px;
        font-weight: bold;
    }
`

export const Total = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    button {
        width: 150px;
        border: 2px solid;
        background-color: #e6c864;
        padding: 6px;
        border-radius: 8px;
        cursor: pointer;
        transition-duration: 0.4s;
        :hover {
            background-color:orange;
        }
    }
`