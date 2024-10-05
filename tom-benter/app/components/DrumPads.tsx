import React from "react";
import Pad from "./Pad";

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    backgroundColor: "darkgrey",
    borderRadius: "2px",
  } as React.CSSProperties,
  drumPadGrid: {
    height: "100%",
    width: "100%",
    padding: "1rem 2rem",
    backgroundColor: "darkgrey",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "1rem",
    justifyItems: "center",
  } as React.CSSProperties,
};

// Array of audio file paths
const samples = [
  "/audio/bank1/toad1.wav", "/audio/bank1/toad2.wav", "/audio/bank1/toad3.wav", "/audio/bank1/toad4.wav",
  "/audio/bank1/toad5.wav", "/audio/bank1/toad6.wav", "/audio/bank1/toad7.wav", "/audio/bank1/toad8.wav",
  "/audio/bank1/toad9.wav", "/audio/bank1/toad10.wav", "/audio/bank1/toad11.wav", "/audio/bank1/toad12.wav",
  "/audio/bank1/toad13.wav", "/audio/bank1/toad14.wav", "/audio/bank1/toad15.wav", "/audio/bank1/toad16.wav",
];

function DrumPads() {
  return (
    <div style={styles.wrapper}>
      <h2>------ DRUMS ------</h2>
      <div style={styles.drumPadGrid}>
        {samples.map((sample, index) => (
          <Pad key={index} sample={sample} />
        ))}
      </div>
    </div>
  );
}

export default DrumPads;