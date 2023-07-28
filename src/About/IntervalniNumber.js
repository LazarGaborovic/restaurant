import React, { useState, useEffect } from 'react';
import "./IntervalniNumber.css";

function IntervalniNumber() {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    let animationInterval;
    let scrollDirection = 1; // 1 - skrolovanje nadole, -1 - skrolovanje nagore

    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 2)) + min;
    }

    animationInterval = setInterval(() => {
      if (startCounting) {
        setCurrentNumber((prevNumber) => {
          const targetNumber = getRandomNumber(1255, 1256);
          if (prevNumber !== targetNumber) {
            const diff = targetNumber - prevNumber;
            const step = Math.ceil(diff / 10);
            const nextNumber = prevNumber + step * scrollDirection;

            if (
              (scrollDirection === 1 && nextNumber >= targetNumber) ||
              (scrollDirection === -1 && nextNumber <= targetNumber)
            ) {
              clearInterval(animationInterval);
              return targetNumber;
            }

            return nextNumber;
          } else {
            return prevNumber;
          }
        });
      }
    }, 50);

    function handleScroll(event) {
      if (event.deltaY < 0) {
        // Korisnik skroluje nagore
        scrollDirection = -1;
      } else if (event.deltaY > 0) {
        // Korisnik skroluje nadole
        if (!startCounting) {
          setStartCounting(true); // Pokreni odbrojavanje kada se prvi put skroluje nadole
        }
        scrollDirection = 1;
      }
    }

    window.addEventListener('wheel', handleScroll);

    return () => {
      clearInterval(animationInterval);
      window.removeEventListener('wheel', handleScroll);
    };
  }, [startCounting]);

  return (
    <div className="number-animation">
      <h2 className='numberguests'>{currentNumber}</h2>
    </div>
  );
}

export default IntervalniNumber;
