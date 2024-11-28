import logo from '../../imagens/logo.svg';
import styled from 'styled-components';

const LogoDiv = styled.div`
    display: flex;
    font-size: 30px;
    align-items: center;
`

const LogoImagem = styled.img`
  margin-right: 10px;
    height: auto;
    width: 40px; 
`

function Logo(){
    return( 
        <LogoDiv>
            <LogoImagem 
            src={logo}
            alt="logo"
            /> 
            <p> <strong>Alura</strong>Books</p>
        </LogoDiv>
        
    )
}

export default Logo;