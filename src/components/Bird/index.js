import React from 'react'

const Bird = ({birdBottom, birdLeft}) => {
    const birdWidth = 50;
    const birdHeight = 60;
    const styles = {
        position: "absolute",
        backgroundColor: "blue",
        width: birdWidth,
        height: birdHeight,
        bottom: birdBottom - (birdHeight/2),
        left: birdLeft - (birdWidth/2)
    }

    return (
        <>
        <div style={styles}>
        </div>
        </>
    )
}

export default Bird
