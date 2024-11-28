import styled from "styled-components";

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

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OpcoesHeader() {
    return (
        <OpcoesLista>
            {
                textoOpcoes.map((texto, index) => ( // Adicionando o index como key
                    <OpcoesItens key={index}> 
                        <p>{texto}</p>
                    </OpcoesItens>
                ))
            }
        </OpcoesLista>
    );
}

export default OpcoesHeader;