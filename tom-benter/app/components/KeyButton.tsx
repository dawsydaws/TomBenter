"use client";

import React from "react";
import styled from "styled-components";
import FeedbackLight from "./FeedbackLight";

// Define the prop types for Container
const Container = styled.div<{ $columnStart: number; $rowStart: number }>`
  grid-column-start: ${(props) => props.$columnStart};
  grid-row-start: ${(props) => props.$rowStart};
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 0.5rem;
  gap: 0.25rem;
  width: 100%;
  white-space: nowrap;
  font-size: 0.8rem;
`;

const Button = styled.div`
  height: 2rem;
  border-radius: 0.25rem;
  width: 100%;
  background-color: #aeaeae;
  margin: 0;
  padding: 0;
  text-decoration: none;
  border-top: 1px solid white;
  border-left: 1px solid white;

  &:active {
    background-color: #a0a0a0;
    border-top: 1px solid #777;
    border-left: 1px solid #777;
  }
`;

const ButtonRecess = styled.div`
  width: 100%;
  border: 2px solid black;
  border-radius: 0.4rem;
`;


// Destructure and pass gridColumnStart and gridRowStart props
function KeyButton({
  $columnStart,
  $rowStart,
  title,
  label,
}: {
  $columnStart: number;
  $rowStart: number;
  title: string;
  label: string;
}) {
  return (
    <Container $columnStart={$columnStart} $rowStart={$rowStart}>
      <div>{title}</div>
      <FeedbackLight/>
      <ButtonRecess>
        <Button />
      </ButtonRecess>
      {label !== "" && <div>{label}</div>}
    </Container>
  );
}

export default KeyButton;