import React, { useRef, useEffect } from "react";
export default function Fireworks({ width = 800, height = 400, duration = 1000, onComplete }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    canvas.style.background = "transparent";

    let particles = [];
    const colors = ["#ff3b3b", "#ff9a3b", "#ffd23b", "#7cff3b", "#3bffef", "#3b7cff", "#9b3bff"];

    function spawnFirework() {
      const cx = Math.random() * width;
      const cy = Math.random() * (height * 0.6) + height * 0.1;
      const count = 24 + Math.floor(Math.random() * 24);
      const color = colors[Math.floor(Math.random() * colors.length)];
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.2;
        const speed = 2 + Math.random() * 4;
        particles.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 60 + Math.floor(Math.random() * 40),
          age: 0,
          color,
          size: 2 + Math.random() * 2,
        });
      }
    }

    // spawn a few initial fireworks
    for (let i = 0; i < 4; i++) {
      setTimeout(spawnFirework, i * 120);
    }

    let start = performance.now();
    function frame(now) {
      const t = now - start;
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      // occasionally spawn
      if (Math.random() < 0.06) spawnFirework();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.vy += 0.04; // gravity
        p.x += p.vx;
        p.y += p.vy;
        p.age++;
        const lifeRatio = 1 - p.age / p.life;
        if (lifeRatio <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, lifeRatio);
        ctx.arc(p.x, p.y, p.size * lifeRatio, 0, Math.PI * 2);
        ctx.fill();
      }

      if (now - start < duration) {
        rafRef.current = requestAnimationFrame(frame);
      } else {
        // let a few frames finish fading
        rafRef.current = requestAnimationFrame(() => {
          ctx.clearRect(0, 0, width, height);
          if (onComplete) onComplete();
        });
      }
    }

    rafRef.current = requestAnimationFrame(frame);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [width, height, duration, onComplete]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        pointerEvents: "none",
        display: "block",
      }}
    />
  );
}