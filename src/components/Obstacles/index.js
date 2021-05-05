import React from 'react'

const Obstacles = ({color, obstaclesWidth, obstaclesHeight, obstaclesLeft, gap, randomBottom }) => {
    
    const styles = {
        position: 'absolute',
        backgroundColor: color,
        width: obstaclesWidth,
        height: obstaclesHeight,
        left: obstaclesLeft,
        bottom: randomBottom + obstaclesHeight + gap

    }
    const stylesTwo = {
        position: 'absolute',
        backgroundColor: color,
        width: obstaclesWidth,
        height: obstaclesHeight,
        left: obstaclesLeft,
        bottom: randomBottom

    }

    return (
        <>
        <div style={styles}></div>
        <div style={stylesTwo}></div>
        </>
    )
}

export default Obstacles
