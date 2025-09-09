import React, { useRef, useEffect } from "react";

const JujujajakiNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.parentElement?.offsetWidth || 0;
    canvas.height = canvas.parentElement?.offsetHeight || 0;


    // Parameters
    const N = 80;
    const w0 = 1;
    const delta = 0.2;
    const P0 = 0.02; //0.001
    const PE = 0.01;
    const PL = 0.05;
    const padding = 80;
    interface Node {
      id: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      links: Record<number, number>; // neighborId -> weight
    }

    // const nodes: Node[] = Array.from({ length: N }, (_, i) => ({
    //   id: i,
    //   x: Math.random() * canvas.width,
    //   y: Math.random() * canvas.height,
    //   vx: (Math.random() - 0.5) * 0.5,
    //   vy: (Math.random() - 0.5) * 0.5,
    //   links: {},
    // }));
    const nodes: Node[] = Array.from({ length: N }, (_, i) => ({
      id: i,
      x: padding + Math.random() * (canvas.width - 2 * padding),
      y: padding + Math.random() * (canvas.height - 2 * padding),
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      links: {},
    }));

    function step() {
      const i = nodes[Math.floor(Math.random() * N)];

      // Isolation
      if (Math.random() < P0) {
        i.links = {};
        return;
      }

      // Exploration
      if (Math.random() < PE) {
        const j = nodes[Math.floor(Math.random() * N)];
        if (i.id !== j.id && !i.links[j.id]) {
          i.links[j.id] = w0;
          j.links[i.id] = w0;
        }
      }

      // Local search
      if (Math.random() < PL && Object.keys(i.links).length > 0) {
        const neighbors = Object.keys(i.links);
        const j = nodes[parseInt(neighbors[Math.floor(Math.random() * neighbors.length)], 10)];
        const jNeighbors = Object.keys(j.links).filter((k) => parseInt(k, 10) !== i.id);
        if (jNeighbors.length > 0) {
          const k = nodes[parseInt(jNeighbors[Math.floor(Math.random() * jNeighbors.length)], 10)];
          if (!i.links[k.id]) {
            i.links[k.id] = w0;
            k.links[i.id] = w0;
          }
          // Reinforce
          i.links[j.id] += delta;
          j.links[i.id] += delta;
          j.links[k.id] += delta;
          k.links[j.id] += delta;
          if (i.links[k.id]) {
            i.links[k.id] += delta;
            k.links[i.id] += delta;
          }
        }
      }
    }

    // function moveNodes() {
    //   for (const n of nodes) {
    //     n.x += n.vx;
    //     n.y += n.vy;
    //     if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
    //     if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
    //   }
    // }
    function moveNodes() {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;

        // Keep inside padded area
        if (n.x < padding) {
          n.x = padding;
          n.vx *= -1;
        }
        if (n.x > canvas.width - padding) {
          n.x = canvas.width - padding;
          n.vx *= -1;
        }
        if (n.y < padding) {
          n.y = padding;
          n.vy *= -1;
        }
        if (n.y > canvas.height - padding) {
          n.y = canvas.height - padding;
          n.vy *= -1;
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw links
      for (const n of nodes) {
        for (const [id, w] of Object.entries(n.links)) {
          const m = nodes[parseInt(id, 10)];
          // ctx.strokeStyle = `rgba(200,200,200,${Math.min(w / 5, 1)})`; // gray
          ctx.strokeStyle = `rgba(173, 216, 230, ${Math.min(w / 5, 1)})`; // light blue
          ctx.lineWidth = Math.min(w, 3);
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(m.x, m.y);
          ctx.stroke();
        }
      }

      // Draw nodes
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(
          n.x,
          n.y,
          3 + Math.log(1 + Object.keys(n.links).length),
          0,
          2 * Math.PI
        );
        ctx.fillStyle = "white";
        ctx.fillStyle = "white"; // node fill
        ctx.fill();
        ctx.strokeStyle = "lightblue"; // node outline
        ctx.lineWidth = 1.5;
        ctx.stroke();        
      }
    }

    let animationId: number;
    function animate() {
      for (let k = 0; k < 10; k++) step();
      moveNodes();
      draw();
      animationId = requestAnimationFrame(animate);
    }
    animate();

    // Resize handler
  function handleResize() {
    canvas.width = canvas.parentElement?.offsetWidth || 0;
    canvas.height = canvas.parentElement?.offsetHeight || 0;
  }

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // <canvas
    //   ref={canvasRef}
    //   style={{
    //     position: "fixed",
    //     top: 0,
    //     left: 0,
    //     width: "100%",
    //     height: "100%",
    //     zIndex: -1,
    //     background: "#111",
    //   }}
    // />
<canvas
  ref={canvasRef}
  style={{
    position: "absolute", // relative to Hero now
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
  }}
/>


  );
};

export default JujujajakiNetwork;
