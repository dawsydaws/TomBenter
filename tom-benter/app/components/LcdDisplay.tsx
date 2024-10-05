"use client";

import React from "react";
import styled from "styled-components";
import LcdScreen from "./LcdScreen";

const StyledWrapper = styled.div`
  padding-left: 5vw;
  padding-top: 2rem;
  height: 100%; /* Adjust height to be more flexible */
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
  padding: 0 4rem;
`;

const StyledTitle = styled.p`
  color: white;
  font-size: 0.5rem;
  letter-spacing: 0.05rem;
  text-align: center;
  padding: 0.25rem 0;
  white-space: nowrap;
`;

const FunctionTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
`;

const FunctionText = styled.div`
  width: 100%;
  text-align: center;
  color: white;
  font-size: 0.5rem;
`;

const functionLabels = ["F1", "F2", "F3", "F4", "F5", "F6"];

function LcdDisplay({ selectedSong }: { selectedSong: { id: number; name: string; url: string } }) {
  return (
    <StyledWrapper>
      <StyledContainer>
        <ScreenRecess>
          <StyledTitle>INTEGRATED RHYTHM MACHINE 16 BIT DRUM SAMPLER / MIDI SEQUENCER</StyledTitle>
          <LcdScreen selectedSong={selectedSong} />
          <FunctionTextContainer>
            {functionLabels.map((label) => (
              <FunctionText key={label}>
                <p>{label}</p>
              </FunctionText>
            ))}
          </FunctionTextContainer>
        </ScreenRecess>
      </StyledContainer>
    </StyledWrapper>
  );
}

export default LcdDisplay;