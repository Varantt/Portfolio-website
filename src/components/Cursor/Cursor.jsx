import { useEffect, useRef } from "react";

/**
 * Ambient cursor glow — does NOT hide the system cursor.
 * Just adds a soft radial gradient that follows the mouse,
 * giving a subtle premium feel without breaking UX.
 */
export default function Cursor() {
  const glowRef = useRef(null);
  const target = useRef({ x: -400, y: -400 });
  const current = useRef({ x: -400, y: -400 });
  const rafRef = useRef(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    // Only on pointer: fine devices (not touch)
    if (!window.matchMedia("(pointer: fine)").matches) {
      el.style.display = "none";
      return;
    }

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    // Lerp the glow to the cursor position with soft spring
    const LERP = 0.10;
    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * LERP;
      current.current.y += (target.current.y - current.current.y) * LERP;
      el.style.transform = `translate(${current.current.x}px, ${current.current.y}px) translate(-50%, -50%)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}
