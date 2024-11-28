import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';
const icones = [perfil, sacola];

const IconesImagens = styled.li`
  margin-right: 40px;
    width: 25px;
    cursor: pointer;
`
const IconesLista = styled.ul`
    display: flex;
    align-items: center;
`

function IconesHeader(){
    return(
        <IconesLista>
        {
          icones.map((icone) => (
           <IconesImagens> <img src={icone} alt='icones de sacola e perfil'></img></IconesImagens>
          ))
        }  
      </IconesLista>
    )
}


export default IconesHeader;