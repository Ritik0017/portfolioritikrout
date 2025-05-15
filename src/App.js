import logo from './logo.svg';
import './App.css';
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import {BrowserRouter  } from "react-router-dom";
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
// import Experience from './components/sections/Experience';


const Body=styled.div`
background-color: ${({ theme }) => theme.bg};
color: ${({ theme }) => theme.text_primary};
width:100%;
height:90vh;
overflow-x:hidden;
position:relative;
`;


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          
          <Hero />
          <Skills />
          {/* <Experience /> */}
          <Education />
          <Contact />
          <Footer />
          
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
