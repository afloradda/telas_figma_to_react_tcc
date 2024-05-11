import photoIcon from "../../images/Ellipse 4.png"
import iconCalender from "../../images/image 9.svg"
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
  width: 80%;
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
    border-radius: 50%; 
    background-color: #fff; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const DadosDoPerfil = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* Centraliza o conteúdo horizontalmente */
  width: 100vw;
  heigth: auto;
  margin-top: 280px;
  margin-left: 90px;
`;

const Bio = styled.section`
  aling-items: flex-start;
`
const MelhoresAmigos = styled.section`
  display: flex;
  aling-items: flex-start;
  width: 20%;
  height: 300px;
  border-radius: 3%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

`
const Post = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* Centraliza o conteúdo horizontalmente */

  width: 70%;
  heigth: auto;

  float: right;
`

const Bloco = styled.section`

  width: 70%;
  heigth: auto;

  float: right;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

function Apresentacao() {
    return (
      <div className="BaseDiv">
        <Header>
            <CoverPhoto/>
            <PhotoIcon src={photoIcon} alt="Icone Photo"/>
        </Header>
        <DadosDoPerfil>
        <br></br>
          <Bio>
            <h4>&lt;/Encost.IA&gt; ✨</h4>
            <p>Aliquam lectus dolor, tincidunt venenatis <br></br> fermentum vulputate, vehicula in velit. <br></br> Aliquam erat volutpat.</p>
            <iconC src={iconCalender} alt="Icone calendário"/>
            <p>Entrou no dia 11 de Março</p>
          </Bio>

          <MelhoresAmigos>
            <h1>Best Friends</h1>

          </MelhoresAmigos>

          <Post>
            <Bloco>
              <h1>POST</h1>
            </Bloco>
            <Bloco>
              <h1>POST</h1>
            </Bloco>
          </Post>
        </DadosDoPerfil>
        
      </div>
    );
}

export default Apresentacao;