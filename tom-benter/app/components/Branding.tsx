import React from "react";

const styles = {
    container: {
        backgroundColor: "darkgrey",
    } as React.CSSProperties,
    brandFrame: {
    } as React.CSSProperties,
    brand: {
        fontSize: "3rem",
    } as React.CSSProperties,
};

function Branding() {
    return (
        <div style={styles.container}>
            <div style={styles.brandFrame}>
                <h1 style={styles.brand}>AKAI</h1>
                <p>professional</p>
            </div>
        </div>
    );
}

export default Branding;
