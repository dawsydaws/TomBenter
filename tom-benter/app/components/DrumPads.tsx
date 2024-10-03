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
  "/audio/toad1.wav", "/audio/toad2.wav", "/audio/toad3.wav", "/audio/toad4.wav",
  "/audio/toad5.wav", "/audio/toad6.wav", "/audio/toad7.wav", "/audio/toad8.wav",
  "/audio/toad9.wav", "/audio/toad10.wav", "/audio/toad11.wav", "/audio/toad12.wav",
  "/audio/toad13.wav", "/audio/toad14.wav", "/audio/toad15.wav", "/audio/toad16.wav",
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