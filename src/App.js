
import React from 'react'
import { useState, useEffect, useRef } from 'react';
import Bird from './components/Bird/index'
import Obstacles from "./components/Obstacles/index"
import "./App.css"

const App = () => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  console.log(screenWidth)
  const birdLeft = screenWidth / 2;
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2);
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth)
  const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(screenWidth + screenWidth/2 + 30)
  const [obstaclesSubHeight, setObstaclesSubHeight] = useState(0)
  const [obstaclesSubHeightTwo, setObstaclesSubHeightTwo] = useState(0)
  const obstaclesWidth = 60;
  const obstaclesHeight = 300;
  const gap = 200;
  const gravity = 3;
  let obstaclesLeftTimerId 
  let obstaclesLeftTimerIdTwo 
  let gameTimerId 
  const [isGameOver, setIsGameOver] = useState(false)

  const styles = {
    container: {

      display: 'flex',
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      width: 500,
      height: 500
    }


  };
  console.log(styles)

  


  useEffect(() => {
    if (birdBottom > 0) {
      gameTimerId = setInterval(() => {
        setBirdBottom(birdBtm => birdBtm - gravity)
      }, 30)
      return () => clearInterval(gameTimerId)

    }
  }, [birdBottom])

  console.log(birdBottom)

  const jump = () => {
    
    if (!isGameOver && (birdBottom < screenHeight)) {
      setBirdBottom(birdBottom => birdBottom + 50)
    }
  }
  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (e.keyCode !== 70) {
        return;
      }

      

      jump();
    });
  }, []);



//obstacles
  useEffect(() => {
    if (obstaclesLeft > -obstaclesWidth) {
      obstaclesLeftTimerId = setInterval(() => {
        setObstaclesLeft(obstaclesLft => obstaclesLft - 5)
      }, 30)
      return () => {
        clearInterval(obstaclesLeftTimerId)
      }

    } else {
      setObstaclesLeft(screenWidth)
      setObstaclesSubHeight( - Math.random() * 200)
    }
  }, [obstaclesLeft])
  console.log(obstaclesLeft)

  useEffect(() => {
    if (obstaclesLeftTwo > -obstaclesWidth) {
      obstaclesLeftTimerIdTwo = setInterval(() => {
        setObstaclesLeftTwo(obstaclesLftTwo => obstaclesLftTwo - 5)
      }, 30)
      return () => {
        clearInterval(obstaclesLeftTimerIdTwo)
      }

    } else {
      setObstaclesLeftTwo(screenWidth)
      setObstaclesSubHeightTwo( - Math.random() * 200)
    }
  }, [obstaclesLeftTwo])
  console.log(obstaclesLeftTwo)

  //collisions
  useEffect(() => {
    if (
      ((birdBottom < (obstaclesSubHeight + obstaclesHeight + 30) ||
     birdBottom > (obstaclesSubHeight + obstaclesHeight + gap - 30)) &&
      (obstaclesLeft > screenWidth / 2 - 30 && obstaclesLeft < screenWidth / 2 + 30)
      )
      ||
      ((birdBottom < (obstaclesSubHeightTwo + obstaclesHeight + 30) ||
     birdBottom > (obstaclesSubHeightTwo + obstaclesHeight + gap - 30)) &&
      (obstaclesLeftTwo > screenWidth / 2 - 30 && obstaclesLeftTwo < screenWidth / 2 + 30)
      ))
      {
        gameOver()
      }
  })

  const gameOver = () => {
    clearInterval(gameTimerId)
    clearInterval(obstaclesLeftTimerId)
    clearInterval(obstaclesLeftTimerIdTwo)
    setIsGameOver(true)
  }




  return (


    <div onClick={jump}>

      <Bird
        birdBottom={birdBottom}
        birdLeft={birdLeft}
        onClick={jump}
        
      />
      <Obstacles
        color={'yellow'}
        obstaclesWidth={obstaclesWidth}
        obstaclesHeight={obstaclesHeight}
        randomBottom={obstaclesSubHeight}
        gap={gap}
        obstaclesLeft={obstaclesLeft}
      />
       <Obstacles
        color={'green'}
        obstaclesWidth={obstaclesWidth}
        obstaclesHeight={obstaclesHeight}
        randomBottom={obstaclesSubHeightTwo}
        gap={gap}
        obstaclesLeft={obstaclesLeftTwo}
      />
      
    </div>


  )
}

export default App
