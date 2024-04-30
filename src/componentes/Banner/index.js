import styled from "styled-components";
import perso3 from '../../images/Personagem  Ana 03.png'
import eclipse from '../../images/Ellipse 3.svg';

const BaseDiv = styled.div`
    display: flex; /* Habilita layout flexbox */
    flex-direction: row; /* Organiza itens horizontalmente */
    align-items: flex-start; /* Alinha itens verticalmente a partir do topo */
    width: 100vw; /* Assume a largura total da viewport */
    height: 100vh; /* Assume a altura total da viewport */
`;

const BannerComponent = styled.section`
    display: flex;
    width: 100vw;
    height: auto;
    justify-content: flex-end;
    position: relative; /* Permite posicionamento relativo de elementos */
`;

const TituloEncostia = styled.div`
    display: flex; 
    flex-direction: column; /* Mantenha a direção da coluna para empilhar elementos de texto */
    justify-content: center; /* Centraliza o conteúdo verticalmente */
    align-items: center; /* Centraliza o conteúdo horizontalmente */
    width: 100%; /* Mantém a largura total */
    height: auto; /* Mantém a altura automática */
    margin-top: 250px; 
    position: relative; /* Permite posicionamento relativo para elementos internos */
`;

const H1Econstia = styled.h1`
    display: flex;
    font-size: 72px;
    line-height: 1.5; /* Ajusta line-height para melhor ajuste do texto */
    margin-bottom: 4px; /* Ajuste o valor de margin-bottom conforme necessário */
    font-family: 'Inter', sans-serif; /* Specify Inter as the primary font */
`;

const PEconstia = styled.p`
    margin-bottom: 100px; /* Adjust the margin-bottom value as needed */
`;

const ManipulandoPerso = styled.img`
    display: block;
    position: absolute;
    z-index: 1; /* Sobrepor à imagem do eclipse */
    width: 1049px;
    height: 1073px;
`;

const ManipulandoEclipse = styled.img`
    display: block;
    width: 1216px;
    height: 900px;
    position: absolute;
    right: 0;
    top: 0; /* Posiciona a imagem no topo */
`;

function Banner(){
    return(
        <BaseDiv>
            <TituloEncostia>
                <H1Econstia>&lt;/Encost.IA&gt;</H1Econstia>
                <PEconstia> ✨ Transforme sua lista de tarefas em conquistas com a EncostIA.</PEconstia>
            </TituloEncostia>
            <BannerComponent>
                <ManipulandoPerso src={perso3} alt='Img Encostia.'></ManipulandoPerso>
                <ManipulandoEclipse src={eclipse} alt='Fundo banner eclipse.'></ManipulandoEclipse>
            </BannerComponent>
        </BaseDiv>

    );
}

export default Banner