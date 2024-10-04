"use client";

import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 0.5rem;
`;
const StyledKnob = styled.div`
  width: 80px;
  height: 80px;
  background-color: black;
  border-radius: 50%;
`;
const StyledLabel = styled.label`font-size: 0.8rem`;

function Knob({ label }: { label: string }) {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledKnob />
    </StyledContainer>
  );
}

export default Knob;
