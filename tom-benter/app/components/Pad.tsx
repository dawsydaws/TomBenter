"use client";

import React from "react";
import styled from "styled-components";

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
  border: 4px solid black;
  border-radius: 6px;
  display: inline-block;
`;

function Pad() {
  // Define loadTone function to dynamically import Tone.js and trigger sound
  const loadTone = async () => {
    if (typeof window !== "undefined") {
      try {
        const Tone = await import("tone"); // Import Tone.js dynamically

        // Ensure AudioContext is resumed in browsers
        if (Tone.getContext().state !== "running") {
          console.log("Audio context state:", Tone.getContext().state);
          await Tone.start();
        }

        const synth = new Tone.Synth().toDestination();

        // Ensure Tone.js is loaded before triggering any sound
        await Tone.loaded();
        synth.triggerAttackRelease("C4", "8n");
        console.log("Tone played!");
      } catch (error) {
        console.error("Error loading Tone.js", error);
      }
    }
  };

  return (
    <ButtonRecess>
      <Button onClick={loadTone}></Button>
    </ButtonRecess>
  );
}

export default Pad;
