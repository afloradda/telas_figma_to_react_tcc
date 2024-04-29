import styled from "styled-components";
import perso3 from '../../images/Personagem  Ana 03.png'
import eclipse from '../../images/Ellipse 3.svg';
// import banner from '../../images/aaaaaaaaaaaaaaaaaa.png';

const BannerComponent = styled.section`
    display: flex;
    width: 100vw;
    height: auto;
    justify-content: flex-end;
`

function Banner(){
    return(
        <BannerComponent>
            {/* <img src={banner} alt='<Enconst.IA>'></img> */}
        </BannerComponent>
    );
}

export default Banner