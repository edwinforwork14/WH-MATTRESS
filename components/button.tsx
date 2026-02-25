"use client" 


const AnimatedButton = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="
        relative
        px-8 py-3
        text-lg font-semibold
        overflow-hidden
        bg-[#224A51] 
        text-[#FFFFFF]
        rounded-md 
        border border-[#87A7AA]
        shadow-lg
        transition-all duration-300 ease-out
        hover:scale-105
        hover:shadow-xl
        group
      "
    >
      <span 
        className="
          absolute inset-0 
          w-full h-full
          bg-gradient-to-r from-[#87A7AA] via-[#224A51] to-[#87A7AA]
          opacity-0
          transform -translate-x-full
          transition-all duration-700 ease-out
          group-hover:opacity-100
          group-hover:translate-x-0
        "
      ></span>
      <span className="relative z-10">
        {text}
      </span>
    </button>
  );
};

export default AnimatedButton;