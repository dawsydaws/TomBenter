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
  width: 100%;
  border: 4px solid black;
  border-radius: 6px;
  display: inline-block;
`;

function Pad({ sample }: { sample: string }) {
  // Define loadTone function to dynamically import Tone.js and play the sample
  const loadTone = async (sampleUrl: string) => {
    if (typeof window !== "undefined") {
      try {
        const Tone = await import("tone"); // Import Tone.js dynamically

        // Ensure AudioContext is resumed in browsers
        if (Tone.getContext().state !== "running") {
          await Tone.start();
        }

        // Create a Tone.Player to play the audio sample
        const player = new Tone.Player(sampleUrl).toDestination();

        // Ensure the sample is loaded before playing
        await Tone.loaded();
        player.start(); // Play the sample
        console.log(`Sample ${sampleUrl} played!`);
      } catch (error) {
        console.error("Error loading Tone.js", error);
      }
    }
  };

  return (
    <ButtonRecess>
      <Button onClick={() => loadTone(sample)}/>
    </ButtonRecess>
  );
}

export default Pad;