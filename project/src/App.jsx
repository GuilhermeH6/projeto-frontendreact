import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Carrinho from './components/Carrinho/Carrinho'
import Footer from './components/Footer/Footer'
import data from './data'
import { useEffect, useState } from 'react'
import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;  
  }
`;

const ContainerPai = styled.div`
  display:flex;
  justify-content: space-between;
`;

const ContainerProduto = styled.div`
`;

const ContainerCarrinho = styled.div`
  height: 600px;
  display: flex;
  width: 100%;
  padding: 20px;
`;

const carrinhoLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

function App() {
  const { products } = data;

  const [cartItems, setCartItems] = useState(carrinhoLocalStorage);
  const [pesquisa, setPesquisa] = useState("");
  const [ordem, setOrdem] = useState("")
  const [valorMinimo, setValorMinimo] = useState("")
  const [valorMaximo, setValorMaximo] = useState("")

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }, [cartItems])

  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qntd: exist.qntd + 1 } : x));
    } else {
      setCartItems([...cartItems, { ...product, qntd: 1 }])
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qntd === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qntd: exist.qntd - 1 } : x));
    }
  };

  return (
    <>
    <GlobalStyle />
    <Header />
    <ContainerPai>      
      <ContainerProduto>
        <Main onAdd={onAdd} products={products} pesquisa={pesquisa} setPesquisa={setPesquisa} ordem={ordem} setOrdem={setOrdem} valorMinimo={valorMinimo} setValorMinimo={setValorMinimo} valorMaximo={valorMaximo} setValorMaximo={setValorMaximo} />
      </ContainerProduto>
      <ContainerCarrinho>
        <Carrinho onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      </ContainerCarrinho>
    </ContainerPai>
    <Footer></Footer>
    </>
  )
}

export default App
