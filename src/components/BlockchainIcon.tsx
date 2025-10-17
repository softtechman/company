const BlockchainIcon = () => {
    return (
      <div className="w-24 h-24 relative animate-float">
        <svg viewBox="0 0 120 120" className="w-full h-full">
          <defs>
            <linearGradient id="cube1Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(195, 100%, 60%)" />
              <stop offset="100%" stopColor="hsl(195, 100%, 41%)" />
            </linearGradient>
            <linearGradient id="cube2Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(195, 100%, 70%)" />
              <stop offset="100%" stopColor="hsl(195, 100%, 50%)" />
            </linearGradient>
            <linearGradient id="cube3Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(25, 100%, 65%)" />
              <stop offset="100%" stopColor="hsl(25, 100%, 50%)" />
            </linearGradient>
          </defs>
          
          {/* Top cyan cube */}
          <g className="animate-pulse" style={{ animationDuration: '2s' }}>
            <path d="M60 15 L75 23 L75 38 L60 46 L45 38 L45 23 Z" fill="url(#cube1Gradient)" />
            <path d="M60 15 L75 23 L60 31 L45 23 Z" fill="hsl(195, 100%, 70%)" opacity="0.9" />
            <path d="M45 23 L45 38 L60 46 L60 31 Z" fill="hsl(195, 100%, 30%)" opacity="0.7" />
            <path d="M60 31 L60 46 L75 38 L75 23 Z" fill="hsl(195, 100%, 35%)" opacity="0.8" />
          </g>
          
          {/* Bottom left blue cube */}
          <g className="animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '0.3s' }}>
            <path d="M35 55 L50 63 L50 78 L35 86 L20 78 L20 63 Z" fill="url(#cube2Gradient)" />
            <path d="M35 55 L50 63 L35 71 L20 63 Z" fill="hsl(195, 100%, 75%)" opacity="0.9" />
            <path d="M20 63 L20 78 L35 86 L35 71 Z" fill="hsl(195, 100%, 40%)" opacity="0.7" />
            <path d="M35 71 L35 86 L50 78 L50 63 Z" fill="hsl(195, 100%, 45%)" opacity="0.8" />
          </g>
          
          {/* Bottom right orange cube */}
          <g className="animate-pulse" style={{ animationDuration: '2.2s', animationDelay: '0.6s' }}>
            <path d="M85 55 L100 63 L100 78 L85 86 L70 78 L70 63 Z" fill="url(#cube3Gradient)" />
            <path d="M85 55 L100 63 L85 71 L70 63 Z" fill="hsl(25, 100%, 70%)" opacity="0.9" />
            <path d="M70 63 L70 78 L85 86 L85 71 Z" fill="hsl(25, 100%, 45%)" opacity="0.7" />
            <path d="M85 71 L85 86 L100 78 L100 63 Z" fill="hsl(25, 100%, 40%)" opacity="0.8" />
          </g>
        </svg>
      </div>
    );
  };
  
  export default BlockchainIcon;
  