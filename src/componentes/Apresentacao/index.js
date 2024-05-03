import photoIcon from "../../images/Ellipse 4.png"
import styled from "styled-components";

const Header = styled.div`
    display: flex; 
    flex-direction: column; /* Mantenha a direção da coluna para empilhar elementos de texto */
    justify-content: center; /* Centraliza o conteúdo verticalmente */
    align-items: center; /* Centraliza o conteúdo horizontalmente */
    width: 100%; /* Mantém a largura total */
    height: auto; /* Mantém a altura automática */
    margin-top: 250px; 
`

const CoverPhoto = styled.section`
  position: absolute; /* Posiciona a foto de capa de forma absoluta */
  width: 1481px; /* Cobre toda a largura do header */
  height: 340px; /* Cobre toda a altura do header */
  border-radius: 8px;
  background: rgba(37, 133, 125, 1);
  background-size: cover; /* Cobre todo o espaço sem distorção */
  background-position: center; /* Centraliza a foto de capa */
  filter: brightness(0.8); /* Aplica um filtro leve de brilho */
`;

const PhotoIcon = styled.img`
    margin-top: 500px;
    position: absolute; /* Posiciona o ícone de forma absoluta */
    left: 250px; /* Posiciona 20px da borda esquerda */
    transform: translateY(-50%); /* Centraliza verticalmente */
    width: 198px; /* Ajuste a largura conforme necessário */
    height: 196px; /* Ajuste a altura conforme necessário */
    border-radius: 50%; /* Cria uma forma circular */
    background-color: #fff; /* Define uma cor de fundo para o ícone */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adiciona uma sombra sutil */
`;

function Apresentacao() {
    return (
      <div className="BaseDiv">
        <Header>
            <CoverPhoto/>
            <PhotoIcon src={photoIcon} alt="Icone Photo"/>
        </Header>
        
      </div>
    );
}

export default Apresentacao;