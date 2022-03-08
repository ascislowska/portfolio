import React from "react";
import "../styles/components/particles.scss";

//generate multiple div elements with classes particles and particle-1
const Particles = () => {
  const particles = [];
  for (let i = 0; i < 100; i++) {
    const className = `particle particle-${i}`;
    particles.push(className);
  }

  return (
    <div className="animation-wrapper">
      {particles.map((particle) => (
        <div className={particle} key={particle}></div>
      ))}
      <div className="animation-wrapper">
        {particles.map((particle) => (
          <div className={particle}></div>
        ))}
      </div>
    </div>
  );
};

export default Particles;
