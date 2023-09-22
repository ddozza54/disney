import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function App() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
`
