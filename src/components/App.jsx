import React from "react";
import styled from "styled-components";
import SocialLinks from "./SocialLinks.jsx";
import GlobalStyles from "../GlobalStyles.js";

const App = () => {
  return (
    <>
      <Main>
        <SocialLinks />
      </Main>
      <GlobalStyles />
    </>
  );
};

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;

  background-color: var(--color-off-black);
`;

export default App;
