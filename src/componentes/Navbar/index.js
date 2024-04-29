import Banner from "../Banner";
import styled from "styled-components";
// import { useFont } from 'styled-components/hooks';

const Menubar = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    padding: 0 20px;
`;

const NavLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #333;
  font-size: 16px;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover { /* Estilo para hover */
    background-color: #eee; /* Muda a cor de fundo ao passar o mouse */
  }
`;

function Navbar(){
    // const [font] = useFont('Inter', {weight: '400'});

    // if(!font.isLoaded) {
    //     return <div> Carregando fonte...</div>;
    // }

    return(
        <Menubar>
            <NavLink href="#">MENU</NavLink>
            <NavLink href="#">APRESENTAÇÃO</NavLink>
            <NavLink href="#">LOGIN</NavLink>
        </Menubar>
    );
}

export default Navbar;