"use client";

import React from "react";
import styled from "styled-components";

const Button = styled.div`
    display: flex;
    height: 100%; 
    background-color: #aeaeae;
    border-top: 2px solid white;
    border-left: 2px solid white;
    border-radius: 2px;

    &:active {
    background-color: #a0a0a0;
    border-top: 1px solid #777;
    border-left: 1px solid #777;
  }
`

const ButtonRecess = styled.div`
    border: 4px solid black;
    border-radius: 6px;
`

function Pad() {
  return (
    <ButtonRecess>
      <Button/>
    </ButtonRecess>
  );
}

export default Pad;
