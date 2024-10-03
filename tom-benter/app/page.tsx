import Branding from "./components/Branding";
import DrumPadControls from "./components/DrumPadControls";
import DrumPads from "./components/DrumPads";
import styles from "./page.module.css";

const componentStyle = {
  console: {
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    color: "black",
    border: "2px solid black",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    paddingBottom: "3rem",
    paddingRight: "1rem",
    paddingLeft: "2.5rem",

  },

  leftSide: {
    display: "grid",
    gridColumnStart: "1",
    gridColumnEnd: "7",
    backgroundColor: "green",
    gridTemplateRows: "320px 144px 1fr"
  },

  rightSide: {
    gridColumnStart: "7",
    gridColumnEnd: "13",
    display: "grid",
    gridTemplateRows: ".25fr .5fr 1fr",
    paddingTop: "2rem",
    paddingLeft: "3rem",
    gap: "1rem"
  },

}


export default function Home() {
  return (
    <div className={styles.page}>
      <div style={componentStyle.console}>
        <div style={componentStyle.leftSide}>
          <div className="lcdScreen">LCD</div>
          <div className="functionKeys">Function keys</div>
          <div className="everythingElse">Everything else</div>
        </div>
        <div style={componentStyle.rightSide}>
          <Branding />
          <DrumPadControls />
          <DrumPads />
        </div>
      </div>
    </div>
  );
}
