import React from "react";
import KeyButton from "./KeyButton";

const styles = {
  container: {
    backgroundColor: "darkgrey",
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    paddingLeft: "2rem",
  },
  left: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridColumnStart: "1",
    gridColumnEnd: "3",
    paddingTop: "2rem",
    paddingBottom: "1rem",
    gap: "0.5rem 0 "
  } as React.CSSProperties,
  right: {
    gridColumnStart: "3",
    gridColumnEnd: "6",
    padding: "2rem",
  },
  upperWhiteBackground: {
    gridRowStart: "1",
    gridColumnStart: "1",
    gridColumnEnd: "3",
    backgroundColor: "white",
    height: "3rem",
  } as React.CSSProperties,
  lowerWhiteBackground: {
    gridRowStart: "2",
    gridColumnStart: "1",
    gridColumnEnd: "3",
    backgroundColor: "white",
    height: "3rem",
  } as React.CSSProperties,
};

function DrumPadControls() {
  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <div style={styles.upperWhiteBackground}></div>
        <div style={styles.lowerWhiteBackground}></div>
        <KeyButton
          $columnStart={1}
          $rowStart={1}
          title="FULL LEVEL"
          label="A/a"
        />
        <KeyButton
          $columnStart={2}
          $rowStart={1}
          title="16 LEVELS"
          label="SPACE"
        />
        <KeyButton
          $columnStart={1}
          $rowStart={2}
          title="NEXT SEQ"
          label=""
        />
        <KeyButton
          $columnStart={2}
          $rowStart={2}
          title="TRACK MUTE"
          label=""
        />
      </div>
      <div style={styles.right}>Right</div>
    </div>
  );
}

export default DrumPadControls;
