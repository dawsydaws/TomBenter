"use client";

import React from "react";
import styled from "styled-components";
import { playAudioSample } from "../utils/playAudioSample";

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #aeaeae;
  border-top: 2px solid white;
  border-left: 2px solid white;
  border-radius: 2px;
  cursor: pointer;

  &:active {
    background-color: #a0a0a0;
    border-top: 1px solid #777;
    border-left: 1px solid #777;
  }
`;

const ButtonRecess = styled.div`
  width: 100%;
  border: 4px solid black;
  border-radius: 6px;
  display: inline-block;
`;

function Pad({ sample }: { sample: string }) {
  
  function playAudio() {
    playAudioSample(sample);
  }

  return (
    <ButtonRecess>
      <Button onClick={playAudio} />
    </ButtonRecess>
  );
}

export default Pad;
