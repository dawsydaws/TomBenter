import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding-top: 2rem;
  padding-bottom: 2rem;
  gap: 1rem;
  padding-left: 8rem;
  padding-right: 4rem;
`;

const FunctionButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const FunctionLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 0 1rem;
  text-align: center;
  max-width: 1rem;

  p {
    color: white;
    font-size: 0.8rem;
  }
`;
const FunctionButtonRecess = styled.div`
  border: 2px solid black;
  border-radius: 4px;
  height: 1.5rem;
  width: 80%;
`;

const FunctionButton = styled.div`
  background-color: lightgray;
  text-align: center;
  height: 100%;
`;

function FunctionKeys() {
  return (
    <StyledContainer>
      <FunctionButtonContainer>
        <FunctionLabel>
          <p>F1</p>
        </FunctionLabel>
        <FunctionButtonRecess>
          <FunctionButton />
        </FunctionButtonRecess>
      </FunctionButtonContainer>
      <FunctionButtonContainer>
        <FunctionLabel>
          <p>F2</p>
        </FunctionLabel>
        <FunctionButtonRecess>
          <FunctionButton />
        </FunctionButtonRecess>
      </FunctionButtonContainer>
      <FunctionButtonContainer>
        <FunctionLabel>
          <p>F3</p>
        </FunctionLabel>
        <FunctionButtonRecess>
          <FunctionButton />
        </FunctionButtonRecess>
      </FunctionButtonContainer>
      <FunctionButtonContainer>
        <FunctionLabel>
          <p>F4</p>
        </FunctionLabel>
        <FunctionButtonRecess>
          <FunctionButton />
        </FunctionButtonRecess>
      </FunctionButtonContainer>
      <FunctionButtonContainer>
        <FunctionLabel>
          <p>F5</p>
        </FunctionLabel>
        <FunctionButtonRecess>
          <FunctionButton />
        </FunctionButtonRecess>
      </FunctionButtonContainer>
      <FunctionButtonContainer>
        <FunctionLabel>
          <p>F6</p>
        </FunctionLabel>
        <FunctionButtonRecess>
          <FunctionButton />
        </FunctionButtonRecess>
      </FunctionButtonContainer>
    </StyledContainer>
  );
}

export default FunctionKeys;
