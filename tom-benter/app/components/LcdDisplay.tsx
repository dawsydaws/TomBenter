"using client";

import React from "react";
import styled from "styled-components";
import LcdScreen from "./LcdScreen";

const StyledWrapper = styled.div`
  padding-left: 4rem;
  padding-top: 2rem;
  height: 280px; //remove later
`;
const StyledContainer = styled.div`
  height: 100%;
  border: 1px solid black;
  border-style: double;
  border-width: 0.5rem;
  padding: 2.5rem 4rem;
  border-radius: 8px;
`;

const ScreenRecess = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid black;
  background-color: black;
  padding:0 4rem;

  p {
    color: white;
    font-size: 0.5rem;
    gap: 0.5rem;
    letter-spacing: 0.05rem;
    text-align: center;
    padding: .25rem 0;
  }
`;

const FunctionTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 2rem;
`;
const FunctionText = styled.div`
  width: 100%;
  align-content: center;
`;

function LcdDisplay() {
  return (
    <StyledWrapper>
      <StyledContainer>
        <ScreenRecess>
          <p>INTEGRATED RYTHM MACHINE 16 BIT DRUM SAMPLER / MIDI SEQUENCER</p>
          <LcdScreen />
          <FunctionTextContainer>
            <FunctionText>
              <p>F1</p>
            </FunctionText>
            <FunctionText>
              <p>F2</p>
            </FunctionText>
            <FunctionText>
              <p>F3</p>
            </FunctionText>
            <FunctionText>
              <p>F4</p>
            </FunctionText>
            <FunctionText>
              <p>F5</p>
            </FunctionText>
            <FunctionText>
              <p>F6</p>
            </FunctionText>
          </FunctionTextContainer>
        </ScreenRecess>
      </StyledContainer>
    </StyledWrapper>
  );
}

export default LcdDisplay;
