import React from "react";
import styled from "styled-components";
import FeedbackLight from "./FeedbackLight";

const StyledContainer = styled.div`
  width: fit-content;
`;

const StyledLabelFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const StyledLabel = styled.div``;

const StyledButtonRecess = styled.div`
  border: 2px solid black;
  border-radius: 4px;
  width: fit-content;
`;

const StyledButton = styled.div`
  background-color: lightgray;
  padding: 1rem;
  width: 80px;
  height: 56px;
  border-top: 1px solid white;
  border-left: 1px solid white;
  cursor: pointer; /* Add cursor to indicate it's clickable */

  &:active {
    background-color: #a0a0a0;
    border-top: 1px solid #777;
    border-left: 1px solid #777;
  }
`;

function TransportButton({
  label,
  feedbackLight,
  onClick, /* Accept onClick prop */
}: {
  label: string;
  feedbackLight?: boolean;
  onClick?: () => void; /* Make onClick an optional prop */
}) {
  return (
    <StyledContainer>
      <StyledLabelFrame>
        {feedbackLight && <FeedbackLight />} {/* Render feedback light if true */}
        <StyledLabel>{label}</StyledLabel>
      </StyledLabelFrame>
      <StyledButtonRecess>
        {/* Pass onClick to StyledButton */}
        <StyledButton onClick={onClick} /> 
      </StyledButtonRecess>
    </StyledContainer>
  );
}

export default TransportButton;