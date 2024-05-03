// import logo from './logo.svg';
// import './App.css';
import Navbar from "./componentes/Navbar";
import Banner from "./componentes/Banner";
import Apresentacao from "./componentes/Apresentacao";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  flex-direction: column; /* Stack components vertically */
`;

function App() {
  return (
    <AppContainer>
      <Navbar/>
      <Banner/>
      <div>
        <Apresentacao/>
      </div>
    </AppContainer>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
