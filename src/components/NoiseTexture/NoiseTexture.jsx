export default function NoiseTexture() {
  return (
    <svg
      className="noise-overlay"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <filter id="noise-filter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.9"
          numOctaves="2"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise-filter)" />
    </svg>
  );
}
