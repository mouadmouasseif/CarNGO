import React, { useState, useEffect } from "react";

const images = [
  "/Image/Car.png",
  "/Image/Car2.png",
  "/Image/Car3.png",
];

export default function CarSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // commence à disparaitre (fade out)

      setTimeout(() => {
        // changer l'image après la disparition
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(true); // faire apparaitre (fade in)
      }, 500); // durée de la transition CSS (exemple 500ms)
    }, 5000); // 5 secondes entre chaque changement

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={images[currentIndex]}
      alt="Car"
      className={`car-image ${fade ? "fade-in" : "fade-out"}`}
      style={{ width: "400px", height: "auto" }}
    />
  );
}
