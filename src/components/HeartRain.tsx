import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Heart {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

export default function HeartRain() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((currentHearts) => [
        ...currentHearts.slice(-15), // Keep a reasonable number of hearts
        {
          id: Date.now(),
          x: Math.random() * 100,
          size: 10 + Math.random() * 30,
          duration: 3 + Math.random() * 5,
          delay: Math.random() * 2,
        },
      ]);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: "110vh", opacity: [0, 1, 1, 0] }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            ease: "linear",
          }}
          className="absolute"
          style={{
            left: `${heart.x}vw`,
            fontSize: `${heart.size}px`,
            color: "#E5989B",

          }}
        >
          ❤
        </motion.div>
      ))}
    </div>
  );
}
