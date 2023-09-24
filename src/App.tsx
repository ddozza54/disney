import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";

export default function App() {
  
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
`
