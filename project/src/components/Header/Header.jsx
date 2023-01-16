import React from "react";
import { BotaoTitulo, Container, Titulo} from "./styles"

export default function Header() {

    return (
        <Container>
                <Titulo>
                    <BotaoTitulo href="#/">Astrodev</BotaoTitulo>
                </Titulo>
        </Container>
    );
}
