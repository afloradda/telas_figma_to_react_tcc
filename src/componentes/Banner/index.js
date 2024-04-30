import styled from "styled-components";
import perso3 from '../../images/Personagem  Ana 03.png'
import eclipse from '../../images/Ellipse 3.svg';

const BannerComponent = styled.section`
    display: flex;
    width: 100vw;
    height: auto;
    justify-content: flex-end;
    position: relative; /* Permite posicionamento relativo de elementos */
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
        <div className="BaseDiv">
            <h1>Encost.IA</h1>
            <p> ✨ Transforme sua lista de tarefas em conquistas com a EncostIA.</p>
            <BannerComponent>
                <ManipulandoPerso src={perso3} alt='Img Encostia.'></ManipulandoPerso>
                <ManipulandoEclipse src={eclipse} alt='Fundo banner eclipse.'></ManipulandoEclipse>
            </BannerComponent>
        </div>

    );
}

export default Banner