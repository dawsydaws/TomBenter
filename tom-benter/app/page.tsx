"use client";

import Branding from "./components/Branding";
import DrumPadControls from "./components/DrumPadControls";
import DrumPads from "./components/DrumPads";
import FunctionKeys from "./components/FunctionKeys";
import LcdDisplay from "./components/LcdDisplay";
import styled from "styled-components";

const StyledWrapper = styled.div`
  height: 100vh;
  padding: 1rem;
`

const StyledConsole = styled.div`
  background-color: rgba(255, 255, 255, 0.85);
  color: black;
  border: 4px solid black;
  border-radius: 8px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding-bottom: 3rem;
  padding-right: 1rem;
`;

const StyledLeft = styled.div`
  display: grid;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-template-rows: auto auto 1fr;
`;

const StyledRight = styled.div`
  display: grid;
  grid-column-start: 4;
  grid-column-end: 7;
  grid-template-rows: auto auto 1fr;
  padding-top: 2rem;
  padding-left: 3rem;
  gap: 1rem;
`;

export default function Home() {
  return (
    <StyledWrapper>
      <StyledConsole>
        <StyledLeft>
          <LcdDisplay/>
          <FunctionKeys/>
          <div className="everythingElse">Everything else</div>
        </StyledLeft>
        <StyledRight>
          <Branding />
          <DrumPadControls />
          <DrumPads />
        </StyledRight>
      </StyledConsole>
    </StyledWrapper>
  );
}
