import React, { useRef, useState, useEffect } from 'react';
import $ from 'jquery';

const CardHoverEffect = () => {
  const cardsRef = useRef(null);
  const styleRef = useRef(null);
  const [xTimeout, setXTimeout] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const pos = [e.offsetX, e.offsetY];
      e.preventDefault();
      if (e.type === 'touchmove') {
        pos = [e.touches[0].clientX, e.touches[0].clientY];
      }

      const cards = cardsRef.current.querySelectorAll('.card');
      const style = styleRef.current;

      cards.forEach((card) => {
        const l = pos[0];
        const t = pos[1];
        const h = card.clientHeight;
        const w = card.clientWidth;
        const px = Math.abs(Math.floor((100 / w) * l) - 100);
        const py = Math.abs(Math.floor((100 / h) * t) - 100);
        const pa = 50 - px + (50 - py);

        const lp = 50 + (px - 50) / 1.5;
        const tp = 50 + (py - 50) / 1.5;
        const pxSpark = 50 + (px - 50) / 7;
        const pySpark = 50 + (py - 50) / 7;
        const pOpc = 20 + Math.abs(pa) * 1.5;
        const ty = ((tp - 50) / 2) * -1;
        const tx = ((lp - 50) / 1.5) * 0.5;

        const gradPos = `background-position: ${lp}% ${tp}%;`;
        const sprkPos = `background-position: ${pxSpark}% ${pySpark}%;`;
        const opc = `opacity: ${pOpc / 100};`;
        const tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg)`;

        const styleCss = `
          .card:hover:before { ${gradPos} }  /* gradient */
          .card:hover:after { ${sprkPos} ${opc} }   /* sparkles */ 
        `;

        card.classList.remove('active');
        card.classList.remove('animated');
        card.style.cssText = tf;
        style.innerHTML = styleCss;

        if (e.type === 'touchmove') {
          return false;
        }
        clearTimeout(xTimeout);
      });
    };

    const handleMouseOut = () => {
      const cards = cardsRef.current.querySelectorAll('.card');
      const style = styleRef.current;

      style.innerHTML = '';
      cards.forEach((card) => {
        card.removeAttribute('style');
        setXTimeout(
          setTimeout(() => {
            card.classList.add('animated');
          }, 2500)
        );
      });
    };

    const cardsElement = cardsRef.current;
    cardsElement.addEventListener('mousemove', handleMouseMove);
    cardsElement.addEventListener('touchmove', handleMouseMove);
    cardsElement.addEventListener('mouseout', handleMouseOut);
    cardsElement.addEventListener('touchend', handleMouseOut);
    cardsElement.addEventListener('touchcancel', handleMouseOut);

    return () => {
      cardsElement.removeEventListener('mousemove', handleMouseMove);
      cardsElement.removeEventListener('touchmove', handleMouseMove);
      cardsElement.removeEventListener('mouseout', handleMouseOut);
      cardsElement.removeEventListener('touchend', handleMouseOut);
      cardsElement.removeEventListener('touchcancel', handleMouseOut);
    };
  }, [xTimeout]);

  return (
    <div ref={cardsRef} className="container m-auto">
      {/* Your card elements go here */}
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="card">
          {/* Card content */}
        </div>
      ))}

      <div ref={styleRef}></div>
    </div>
  );
};

export default CardHoverEffect;
