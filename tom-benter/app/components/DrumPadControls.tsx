"use client";

import React from "react";
import styled from "styled-components";
import KeyButton from "./KeyButton";
import Knob from "./Knob";

const StyledContainer = styled.div`
  background-color: darkgray;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding-left: 2rem;
`;

const StyledRight = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-start: 2;
  grid-column-end: 7;
  padding-left: 2rem;
  padding-right: 3rem;
  padding-bottom: 0.5rem;
`;

const StyledLeft = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 2rem;
  padding-bottom: 1rem;
  gap: 0.5rem 0;
`;

const KnobFrame = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 5;
  display: flex;
  padding-left: 2rem;
`;

const PadHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: 5;
  font-size: 0.75rem;

  hr {
    flex-grow: 1;
    margin: 0;
    border: none;
    border-top: 1px solid black;
  }
`;

const PadBank = styled.div`
  display: grid;
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 2;
  width: 100%;
`;

const styles = {
  upperWhiteBackground: {
    gridRowStart: "1",
    gridColumnStart: "1",
    gridColumnEnd: "3",
    backgroundColor: "white",
    height: "3rem",
  } as React.CSSProperties,
  lowerWhiteBackground: {
    gridRowStart: "2",
    gridColumnStart: "1",
    gridColumnEnd: "3",
    backgroundColor: "white",
    height: "3rem",
  } as React.CSSProperties,
};

function DrumPadControls() {
  return (
    <StyledContainer>
      <StyledLeft>
        <div style={styles.upperWhiteBackground}></div>
        <div style={styles.lowerWhiteBackground}></div>
        <KeyButton $columnStart={1} $rowStart={1} title="FULL LEVEL" label="A/a" />
        <KeyButton $columnStart={2} $rowStart={1} title="16 LEVELS" label="SPACE" />
        <KeyButton $columnStart={1} $rowStart={2} title="NEXT SEQ" label="" />
        <KeyButton $columnStart={2} $rowStart={2} title="TRACK MUTE" label="" />
      </StyledLeft>
      <StyledRight>
        <KnobFrame>
          <Knob label="REC GAIN" />
          <Knob label="MAIN VOLUME" />
        </KnobFrame>
        <PadBank>
          <PadHeader>
            <hr />
            <span>PAD BANK</span>
            <hr />
          </PadHeader>
          <KeyButton $columnStart={1} $rowStart={2} title="A" label="" />
          <KeyButton $columnStart={2} $rowStart={2} title="B" label="" />
          <KeyButton $columnStart={3} $rowStart={2} title="C" label="" />
          <KeyButton $columnStart={4} $rowStart={2} title="D" label="" />
        </PadBank>
      </StyledRight>
    </StyledContainer>
  );
}

export default DrumPadControls;