import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const ClickAnimation = () => {
  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newClick = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      
      setClicks(prev => [...prev, newClick]);
      
      // Remove click after animation completes
      setTimeout(() => {
        setClicks(prev => prev.filter(click => click.id !== newClick.id));
      }, 800);
    };

    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {clicks.map((click) => (
          <div key={click.id} className="absolute">
            {/* Main pop circle */}
            <motion.div
              className="absolute w-2 h-2 bg-yellow-400 rounded-full"
              style={{
                left: click.x - 4,
                top: click.y - 4,
              }}
              initial={{ 
                scale: 0,
                opacity: 1,
              }}
              animate={{ 
                scale: [0, 2, 0],
                opacity: [1, 0.8, 0],
              }}
              transition={{ 
                duration: 0.4,
                ease: "easeOut",
              }}
            />
            
            {/* Sparkle rays using CSS transforms */}
            {Array.from({ length: 8 }).map((_, index) => {
              const angle = (index * 45);
              const length = 15 + Math.random() * 10; // Random length between 15-25px
              
              return (
                <motion.div
                  key={index}
                  className="absolute bg-gradient-to-r from-yellow-400 to-transparent"
                  style={{
                    left: click.x,
                    top: click.y - 0.5,
                    width: `${length}px`,
                    height: '1px',
                    transformOrigin: '0% 50%',
                    rotate: `${angle}deg`,
                  }}
                  initial={{ 
                    scaleX: 0,
                    opacity: 0,
                  }}
                  animate={{ 
                    scaleX: [0, 1, 0],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{ 
                    duration: 0.6,
                    delay: 0.1 + (index * 0.03),
                    ease: "easeOut",
                  }}
                />
              );
            })}
            
            {/* Additional smaller sparkles */}
            {Array.from({ length: 4 }).map((_, index) => {
              const angle = (index * 90) + 22.5;
              const length = 8 + Math.random() * 6; // Smaller rays
              
              return (
                <motion.div
                  key={`small-${index}`}
                  className="absolute bg-gradient-to-r from-yellow-300 to-transparent"
                  style={{
                    left: click.x,
                    top: click.y - 0.5,
                    width: `${length}px`,
                    height: '1px',
                    transformOrigin: '0% 50%',
                    rotate: `${angle}deg`,
                  }}
                  initial={{ 
                    scaleX: 0,
                    opacity: 0,
                  }}
                  animate={{ 
                    scaleX: [0, 1, 0],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{ 
                    duration: 0.5,
                    delay: 0.2 + (index * 0.04),
                    ease: "easeOut",
                  }}
                />
              );
            })}
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ClickAnimation;