"use client";

import React from "react";
import styled from "styled-components";

// Define the prop types for Container
const Container = styled.div<{ gridColumnStart: number; gridRowStart: number }>`
  grid-column-start: ${(props) => props.gridColumnStart};
  grid-row-start: ${(props) => props.gridRowStart};
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

const styles = {
  feedbackLight: {
    height: "0.5rem",
    width: "0.5rem",
    backgroundColor: "black",
    borderRadius: "50%",
  },
  buttonPad: {
    height: "2rem",
    border: "1px solid black",
    borderRadius: "0.25rem",
    width: "100%",
    backgroundColor: "lightgrey",
  },
};

// Destructure and pass gridColumnStart and gridRowStart props
function KeyButton({
  gridColumnStart,
  gridRowStart,
  title,
  label,
}: {
  gridColumnStart: number;
  gridRowStart: number;
  title: string;
  label: string;
}) {
  return (
    <Container gridColumnStart={gridColumnStart} gridRowStart={gridRowStart}>
      <div>{title}</div>
      <span style={styles.feedbackLight}></span>
      <div style={styles.buttonPad}></div>
      {label != "" && <div>{label}</div>}
    </Container>
  );
}

export default KeyButton;
