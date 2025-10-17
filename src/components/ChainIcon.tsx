const ChainIcon = () => {
    return (
      <div className="w-20 h-20 animate-float" style={{ animationDelay: '1s' }}>
        <svg viewBox="0 0 120 80" className="w-full h-full">
          <defs>
            <linearGradient id="chainGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(25, 100%, 65%)" />
              <stop offset="100%" stopColor="hsl(25, 100%, 55%)" />
            </linearGradient>
            <linearGradient id="chainGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(195, 100%, 60%)" />
              <stop offset="100%" stopColor="hsl(195, 100%, 41%)" />
            </linearGradient>
          </defs>
          
          {/* Left orange link */}
          <ellipse cx="25" cy="40" rx="18" ry="12" fill="none" stroke="url(#chainGradient1)" strokeWidth="5" transform="rotate(-20 25 40)" />
          
          {/* Center cyan link */}
          <ellipse cx="60" cy="40" rx="18" ry="12" fill="none" stroke="url(#chainGradient2)" strokeWidth="5" transform="rotate(-20 60 40)" />
          
          {/* Connecting piece */}
          <path
            d="M35 35 L50 35 L50 45 L35 45 Z"
            fill="url(#chainGradient1)"
            opacity="0.8"
          />
        </svg>
      </div>
    );
  };
  
  export default ChainIcon;
  