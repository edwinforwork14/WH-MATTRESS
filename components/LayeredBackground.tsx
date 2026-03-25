import React from 'react';

interface LayeredBackgroundProps {
  className?: string;
}

const LayeredBackground: React.FC<LayeredBackgroundProps> = ({ className = "" }) => {
  const shadowFilterId = "paper-shadow-effect";

  return (
    <div className={`absolute inset-0 w-full h-full -z-10 overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1000 2000"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <filter id={shadowFilterId} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="8"
              stdDeviation="10"
              floodColor="primary"
              floodOpacity="0.25"
            />
          </filter>
        </defs>

        {/* Fondo base sólido */}
        <rect width="1000" height="2000" className="fill-layered-base" />

{/* --- CAPAS SUPERIORES (ULTRA ORGÁNICAS / CASI EN EL BORDE) --- */}

<g transform="translate(0, -40)">
<path
  d="M0,0 H1000 V295 
     C920,259 840,345 700,308 
     C620,289 540,358 430,320 
     C350,295 260,345 180,314 
     C100,289 40,320 0,301 
     Z"
  className="fill-layered-light"
  filter={`url(#${shadowFilterId})`}
/>

<path
  d="M0,0 H1000 V272 
     C950,222 780,320 680,283 
     C600,259 520,332 400,295 
     C300,264 220,308 140,283 
     C80,264 30,289 0,277 
     Z"
  className="fill-layered-dark"
  filter={`url(#${shadowFilterId})`}
/>

<path
  d="M0,0 H1000 V246 
     C880,196 760,295 620,259 
     C520,235 480,308 360,272 
     C280,246 200,289 120,264 
     C60,246 20,272 0,253 
     Z"
  className="fill-layered-mid"
  filter={`url(#${shadowFilterId})`}
/>

<path
  d="M0,0 H1000 V223 
     C900,185 700,272 580,235 
     C500,210 440,283 320,246 
     C240,223 180,259 100,241 
     C50,223 10,241 0,228 
     Z"
  className="fill-layered-pale"
  filter={`url(#${shadowFilterId})`}
/>

<path
  d="M0,0 H1000 V197 
     C860,161 720,235 560,204 
     C480,185 400,235 280,210 
     C200,191 150,223 80,204 
     C30,185 0,204 0,197 
     Z"
  className="fill-layered-deep"
  filter={`url(#${shadowFilterId})`}
/>
</g>



        {/* --- CAPAS INFERIORES (ORGÁNICAS / DESORDENADAS / DIFERENTES ARRIBA) --- */}

<path
  d="M0,1696 
     C140,1627 260,1811 380,1719 
     C480,1650 560,1834 700,1742 
     C820,1673 920,1788 1000,1719 
     V2000 H0 Z"
  className="fill-layered-light"
  filter={`url(#${shadowFilterId})`}
/>

<path
  d="M0,1716 
     C100,1647 240,1831 360,1739 
     C460,1670 580,1866 720,1774 
     C840,1693 930,1820 1000,1751 
     V2000 H0 Z"
  className="fill-layered-dark"
  filter={`url(#${shadowFilterId})`}
/>

<path
  d="M0,1736 
     C120,1667 300,1897 420,1782 
     C520,1701 640,1920 760,1828 
     C880,1759 950,1874 1000,1816 
     V2000 H0 Z"
  className="fill-layered-mid"
  filter={`url(#${shadowFilterId})`}
/>

<path
  d="M0,1756 
     C80,1687 260,1940 400,1837 
     C500,1756 660,1975 800,1883 
     C900,1825 970,1929 1000,1883 
     V2000 H0 Z"
  className="fill-layered-pale"
  filter={`url(#${shadowFilterId})`}
/>

<path
  d="M0,1776 
     C60,1707 220,1980 360,1888 
     C460,1819 680,1990 820,1934 
     C920,1876 980,1945 1000,1922 
     V2000 H0 Z"
  className="fill-layered-deep"
  filter={`url(#${shadowFilterId})`}
/>

      </svg>
    </div>
  );
};

export default LayeredBackground;