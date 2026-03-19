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
              floodColor="black"
              floodOpacity="0.25"
            />
          </filter>
        </defs>

        {/* Fondo base sólido */}
        <rect width="1000" height="2000" className="fill-layered-base" />

        {/* --- CAPAS SUPERIORES (Top Down) --- */}
        <path
          d="M0,0 H1000 V280 C850,220 750,350 600,280 S350,120 250,200 S100,280 0,220 Z"
          className="fill-layered-dark"
          filter={`url(#${shadowFilterId})`}
        />
        <path
          d="M0,0 H1000 V190 C850,140 750,260 600,190 S350,60 250,130 S100,200 0,130 Z"
          className="fill-layered-mid"
          filter={`url(#${shadowFilterId})`}
        />
        <path
          d="M0,0 H1000 V110 C850,60 750,170 600,110 S350,10 250,70 S100,130 0,70 Z"
          className="fill-layered-pale"
          filter={`url(#${shadowFilterId})`}
        />

        {/* --- CAPAS INFERIORES (Bottom Up) --- */}
        <path
          d="M0,1720 C120,1650 350,1780 450,1720 S650,1600 780,1680 S920,1750 1000,1680 V1850 H0 Z"
          className="fill-layered-dark"
          filter={`url(#${shadowFilterId})`}
        />
        <path
          d="M0,1810 C120,1740 350,1870 450,1810 S650,1690 780,1770 S920,1840 1000,1770 V1930 H0 Z"
          className="fill-layered-mid"
          filter={`url(#${shadowFilterId})`}
        />
        <path
          d="M0,1890 C120,1820 350,1950 450,1890 S650,1770 780,1850 S920,1920 1000,1850 V2000 H0 Z"
          className="fill-layered-pale"
          filter={`url(#${shadowFilterId})`}
        />
      </svg>
    </div>
  );
};

export default LayeredBackground;