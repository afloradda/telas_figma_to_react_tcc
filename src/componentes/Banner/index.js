import styled from "styled-components";
import perso3 from '../../images/Personagem  Ana 03.png'
import eclipse from '../../images/Ellipse 3.svg';

const BaseDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const BannerComponent = styled.section`
    position: relative;
    width: 100%;
    margin: 0 auto; /* Centraliza o banner na tela */
`;

const TituloEncostia = styled.div`
    display: flex; 
    flex-direction: column; /* Mantenha a direção da coluna para empilhar elementos de texto */
    justify-content: center; /* Centraliza o conteúdo verticalmente */
    align-items: center; /* Centraliza o conteúdo horizontalmente */
    width: 50%; /* Mantém a largura total */
    height: auto; /* Mantém a altura automática */
    margin-top: 160px; 
    position: relative; /* Permite posicionamento relativo para elementos internos */
`;

const H1Econstia = styled.h1`
    font-size: 3rem;
    margin-bottom: 10px;
`;

const PEconstia = styled.p`
    font-size: 1.5rem;
`;

const ManipulandoPerso = styled.img`
    display: block;
    width: 100%;
    max-width: 800px;
    position: absolute;
    margin-top: 0px;
    right: -50px; /* Movendo a imagem um pouco para a esquerda */
    transform: translate(-50%, -50%);
    const ManipulandoPerso = styled.img;
    z-index: 1; /* Sobrepor à imagem do eclipse */
`;

const ManipulandoEclipse = styled.img`
    display: block;
    width: 100%;
    max-width: 760px;
    position: absolute;
    top: 0px; /* Alteração para posicionar um pouco abaixo do topo */
    right: 0;
`;

function Banner() {
    return (
        <BaseDiv>
            <BannerComponent>
                <TituloEncostia>
                    <H1Econstia>&lt;/Encost.IA&gt;</H1Econstia>
                    <PEconstia>✨ Transforme sua lista de tarefas em conquistas com a EncostIA.</PEconstia>
                </TituloEncostia>
                <ManipulandoPerso src={perso3} alt='Img Encostia.' />
                <ManipulandoEclipse src={eclipse} alt='Fundo banner eclipse.' />
            </BannerComponent>
        </BaseDiv>
    );
}

export default Banner;