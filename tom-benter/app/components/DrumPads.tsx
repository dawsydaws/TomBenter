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
    } as React.CSSProperties,
};

const drumPadsGridStyle = {

}

function DrumPads() {
    return (
        <div style={styles.wrapper}>
            <p>------DRUMS------</p>
            <div style={styles.drumPadGrid}>
                <Pad />
                <Pad />
                <Pad />
                <Pad />
                <Pad />
                <Pad />
                <Pad />
                <Pad />
                <Pad />
                <Pad />
                <Pad />
                <Pad />
                <Pad />
                <Pad />
                <Pad />
                <Pad />
            </div>
        </div>
    );
}

export default DrumPads;
