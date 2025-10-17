const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Top left circle */}
      <div className="absolute left-[20%] top-[40%]">
        <div className="relative w-12 h-12 flex items-center justify-center border border-1 rounded-full">
          <div className="absolute inset-0 bg-[#00B4D8]/20 rounded-full animate-pulse-ring"></div>
          <div className="w-6 h-6 bg-[#00B4D8] rounded-full shadow-lg animate-scale-pulse"></div>
        </div>
      </div>

      {/* Top right circle */}
      <div className="border border-1 rounded-full absolute right-[20%] top-[40%]">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#00B4D8]/20 rounded-full animate-pulse-ring" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-6 h-6 bg-[#00B4D8] rounded-full shadow-lg animate-scale-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>

      {/* Bottom left circle */}
      <div className="absolute left-[20%] bottom-[10%]">
        <div className="border border-1 rounded-full relative w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#00B4D8]/20 rounded-full animate-pulse-ring" style={{ animationDelay: '1s' }}></div>
          <div className="w-6 h-6 bg-[#00B4D8] rounded-full shadow-lg animate-scale-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Bottom right circle */}
      <div className="border border-1 rounded-full absolute right-[20%] bottom-[10%]">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#00B4D8]/20 rounded-full animate-pulse-ring" style={{ animationDelay: '1.5s' }}></div>
          <div className="w-6 h-6 bg-[#00B4D8] rounded-full shadow-lg animate-scale-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>

      {/* SVG for connecting lines and center animation */}
      <svg className="absolute inset-0 w-full h-[1000px] top-[10px]">
        <defs>
          {/* Gradient for lines */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00B4D8" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#00B4D8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        {/* Curved line from top-left circle to center top */}
        <path
          d="M 21% 16.5% Q 30% 20%, 48.5% 35%"
          stroke="#00B4D8"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />
        
        {/* Curved line from top-right circle to center top */}
        <path
          d="M 79% 16.5% Q 70% 20%, 51.5% 35%"
          stroke="#00B4D8"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />
        
        {/* Curved line from bottom-left circle to center bottom */}
        <path
          d="M 21% 73% Q 30% 75%, 48.5% 70%"
          stroke="#00B4D8"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />
        
        {/* Curved line from bottom-right circle to center bottom */}
        <path
          d="M 79% 73% Q 70% 75%, 51.5% 70%"
          stroke="#00B4D8"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />
        
        {/* Three vertical center lines - positioned at center card */}
        <line x1="48%" y1="35%" x2="48%" y2="70%" stroke="#00B4D8" strokeWidth="1.5" opacity="0.3" />
        <line x1="50%" y1="35%" x2="50%" y2="70%" stroke="#00B4D8" strokeWidth="1.5" opacity="0.4" />
        <line x1="52%" y1="35%" x2="52%" y2="70%" stroke="#00B4D8" strokeWidth="1.5" opacity="0.3" />
        
        {/* Animated dots flowing down on each line */}
        <circle cx="48%" r="3" fill="#00B4D8" className="animate-flow-down">
          <animate attributeName="cy" values="35%;70%;35%" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="50%" r="3" fill="#00B4D8" className="animate-flow-down">
          <animate attributeName="cy" values="35%;70%;35%" dur="3s" begin="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="52%" r="3" fill="#00B4D8" className="animate-flow-down">
          <animate attributeName="cy" values="35%;70%;35%" dur="3s" begin="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
};

export default AnimatedBackground;