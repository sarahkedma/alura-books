import styled from "styled-components";
import { Link } from 'react-router-dom'

const OpcoesLista = styled.ul`
    display: flex;
`;

const OpcoesItens = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`;

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE'];

function OpcoesHeader() {
    return (
        <OpcoesLista>
            {
                textoOpcoes.map((texto, index) => ( // Adicionando o index como key
                <Link to={`/${texto.toLowerCase()}`}> <OpcoesItens key={index}> 
                  <p>{texto}</p>
              </OpcoesItens></Link> 
                ))
            }
        </OpcoesLista>
    );
}

export default OpcoesHeader;