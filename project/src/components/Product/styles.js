import styled from "styled-components";

export const Produto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid black;
  width: 350px;
  height: 300px;
  padding: 16px;
  align-items: center;
  .small {
    width: 300px;
    height: 200px;
  }
`;

export const Preco = styled.div``;

export const AdicionarCarrinho = styled.div`
  button {
    font-size: 15px;
    padding: 0.2rem;
    margin: 0.1rem;
    border-radius: 8px;
    border: none;
    background-color: #e6c864;
    width: 200px;
    height: 35px;
    cursor: pointer;
    transition-duration: 0.4s;
        :hover {
            background-color:orange;
        }
  }
`;
