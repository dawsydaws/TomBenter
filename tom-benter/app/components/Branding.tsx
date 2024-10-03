import React from "react";

const styles = {
    container: {
        display: "flex",
    } as React.CSSProperties,
    brandFrame: {
        display: "flex", 
        flexDirection: "column",
        alignItems: "end",
        flexShrink: "1",
    } as React.CSSProperties,
    brandName: {
        fontFamily: "serif",
        fontWeight: "black",
        fontSize: "3rem",
    } as React.CSSProperties,
    brandSeries: {
        fontStyle: "italic",
    } as React.CSSProperties,
    modelFrame: {
        display: "flex", 
        flexGrow: "1",
        flexDirection: "column",
        alignItems: "end",
    } as React.CSSProperties,
    modelName: {
        fontWeight: "black",
        fontSize: "3rem",
        letterSpacing: "0.25rem",
        textDecoration: "underline",

    } as React.CSSProperties,
    modelTagline: {
        letterSpacing: "0.35rem"
    } as React.CSSProperties,
};

function Branding() {
    return (
        <div style={styles.container}>
            <div style={styles.brandFrame}>
                <h1 style={styles.brandName}>AKAI</h1>
                <p style={styles.brandSeries}>professional</p>
            </div>
             <div style={styles.modelFrame}>
                <h1 style={styles.modelName}>MPC2000XL</h1>
                <p style={styles.modelTagline}>MIDI PRODUCTION CENTER</p>
            </div>
        </div>
    );
}

export default Branding;
