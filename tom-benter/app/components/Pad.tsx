import React from 'react'

const styles = {
    padRecess: {
        border: "4px solid black",
        borderRadius: "6px",

    } as React.CSSProperties,
    pad: {
        display: "flex",
        height: "100%",
        backgroundColor: "grey",
        borderTop: "2px solid white",
        borderLeft: "2px solid white",
        borderRadius: "2px",

    } as React.CSSProperties,
}

function Pad() {
    return (
        <div style={styles.padRecess}><div style={styles.pad}></div></div>
    )
}

export default Pad