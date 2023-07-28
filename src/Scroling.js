import React, { useEffect } from 'react';

function Scroling() {
   
        useEffect(() => {
          let isScrolling = false;
      
          function handleMouseWheel(event) {
            event.preventDefault();
      
            if (!isScrolling) {
              const delta = Math.sign(event.deltaY);
              const scrollSpeed = 50;
      
              const scrollAmount = delta * scrollSpeed;
              const targetScroll = window.scrollY + scrollAmount;
      
              isScrolling = true;
              scrollPageSmoothly(targetScroll);
            }
          }
      
          function scrollPageSmoothly(targetScroll) {
            const duration = 1000; 
            const startTime = performance.now();
            const startY = window.scrollY;
            const distance = targetScroll - startY;
      
            function step(currentTime) {
              const elapsedTime = currentTime - startTime;
              const progress = Math.min(elapsedTime / duration, 1);
              const easing = easeOutQuad(progress);
              const scrollPosition = startY + distance * easing;
      
              window.scroll(0, scrollPosition);
      
              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                isScrolling = false;
              }
            }
      
            requestAnimationFrame(step);
          }
      
          function easeOutQuad(t) {
            return t * (20 - t);
          }
      
          document.addEventListener('wheel', handleMouseWheel, { passive: false });
      
          return () => {
            document.removeEventListener('wheel', handleMouseWheel);
          };
        }, []);
      }

export default Scroling;
