export function Signal1({ 
    greenColor = '#00FF00', 
    yellowColor = '#FFDD00', 
    redColor = '#FF0000', 
    isGreenOn = false, 
    isYellowOn = false, 
    isRedOn = false, 
    ...props 
}) {
    const greenFill = isGreenOn ? `url(#greenLightGradient)` : '#333333';
    const yellowFill = isYellowOn ? `url(#yellowLightGradient)` : '#333333';
    const redFill = isRedOn ? `url(#redLightGradient)` : '#333333';
    const greenFilter = isGreenOn ? 'url(#greenGlow)' : 'none';
    const yellowFilter = isYellowOn ? 'url(#yellowGlow)' : 'none';
    const redFilter = isRedOn ? 'url(#redGlow)' : 'none';
    const scaleFactor = 2.5;
    const newWidth = 41 * scaleFactor;
    const newHeight = 268 * scaleFactor;

    return (
        <svg
            width={newWidth}
            height={newHeight}
            viewBox="0 0 41 268"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <defs>
                <radialGradient id="greenLightGradient" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
                    <stop stopColor={greenColor} stopOpacity="1" />
                    <stop offset="1" stopColor={greenColor} stopOpacity="0" />
                </radialGradient>
                <filter id="greenGlow" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                <radialGradient id="yellowLightGradient" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
                    <stop stopColor={yellowColor} stopOpacity="1" />
                    <stop offset="1" stopColor={yellowColor} stopOpacity="0" />
                </radialGradient>
                <filter id="yellowGlow" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                <radialGradient id="redLightGradient" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
                    <stop stopColor={redColor} stopOpacity="1" />
                    <stop offset="1" stopColor={redColor} stopOpacity="0" />
                </radialGradient>
                <filter id="redGlow" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            <g id="Signal-1">
                <g id="colorlights">
                    <path
                        id="green"
                        d="M24.8445 16.3597C24.8445 18.8012 22.6518 20.8597 19.8445 20.8597C17.0372 20.8597 14.8445 18.8012 14.8445 16.3597C14.8445 13.9182 17.0372 11.8597 19.8445 11.8597C22.6518 11.8597 24.8445 13.9182 24.8445 16.3597Z"
                        fill={greenFill}
                        stroke="black"
                        filter={greenFilter}
                    />
        <path
          id="yellow"
          d="M24.8445 29.3597C24.8445 31.8012 22.6518 33.8597 19.8445 33.8597C17.0372 33.8597 14.8445 31.8012 14.8445 29.3597C14.8445 26.9182 17.0372 24.8597 19.8445 24.8597C22.6518 24.8597 24.8445 26.9182 24.8445 29.3597Z"
          fill={yellowFill}
          stroke="black"
          filter={yellowFilter}
        />
        <path
          id="red"
          d="M24.8445 43.3597C24.8445 45.8012 22.6518 47.8597 19.8445 47.8597C17.0372 47.8597 14.8445 45.8012 14.8445 43.3597C14.8445 40.9182 17.0372 38.8597 19.8445 38.8597C22.6518 38.8597 24.8445 40.9182 24.8445 43.3597Z"
         fill={redFill}
          stroke="black"
          filter={redFilter}
        />
      </g>
      <path
        id="Vector 7"
        d="M12.0945 202.333H17.0945M17.0945 185.333V57.3331H23.0945V185.333H24.0945V186.833L28.0945 196.333V202.333H17.0945M17.0945 185.333H16.0945V186.833L11.5945 196.833M17.0945 185.333V202.333"
        stroke="black"
      />
      <path
        id="Foundation"
        d="M32.2361 205.195H9.23606L6.73606 234.945M32.2361 205.195L35.2361 234.945M32.2361 205.195V202.195M35.2361 234.945H6.73606M35.2361 234.945L35.5638 238.195M6.73606 234.945L6.46295 238.195M6.46295 238.195L4.23606 264.695H38.2361L35.5638 238.195M6.46295 238.195H35.5638M32.2361 202.195H34.2361L40.2361 267.195H1.23606L7.23606 202.195H32.2361Z"
        stroke="black"
      />
      <g id="Ellipse 16">
        <mask id="path-6-inside-1_401_34" fill="white">
          <path d="M5.16887 44.21C5.16887 46.0945 5.54846 47.9606 6.28598 49.7016C7.0235 51.4427 8.1045 53.0247 9.46726 54.3572C10.83 55.6898 12.4478 56.7468 14.2284 57.468C16.0089 58.1892 17.9173 58.5603 19.8445 58.5603C21.7717 58.5603 23.6801 58.1892 25.4606 57.468C27.2411 56.7468 28.859 55.6898 30.2217 54.3572C31.5845 53.0247 32.6655 51.4427 33.403 49.7016C34.1405 47.9606 34.5201 46.0945 34.5201 44.21L32.5453 44.21C32.5453 45.8409 32.2168 47.4559 31.5785 48.9627C30.9403 50.4695 30.0047 51.8385 28.8253 52.9918C27.646 54.145 26.2458 55.0598 24.7049 55.684C23.164 56.3081 21.5124 56.6293 19.8445 56.6293C18.1766 56.6293 16.525 56.3081 14.9841 55.684C13.4432 55.0598 12.043 54.145 10.8636 52.9918C9.68426 51.8385 8.74872 50.4695 8.11045 48.9627C7.47217 47.4559 7.14365 45.8409 7.14365 44.21H5.16887Z" />
        </mask>
        <path
          d="M5.16887 44.21C5.16887 46.0945 5.54846 47.9606 6.28598 49.7016C7.0235 51.4427 8.1045 53.0247 9.46726 54.3572C10.83 55.6898 12.4478 56.7468 14.2284 57.468C16.0089 58.1892 17.9173 58.5603 19.8445 58.5603C21.7717 58.5603 23.6801 58.1892 25.4606 57.468C27.2411 56.7468 28.859 55.6898 30.2217 54.3572C31.5845 53.0247 32.6655 51.4427 33.403 49.7016C34.1405 47.9606 34.5201 46.0945 34.5201 44.21L32.5453 44.21C32.5453 45.8409 32.2168 47.4559 31.5785 48.9627C30.9403 50.4695 30.0047 51.8385 28.8253 52.9918C27.646 54.145 26.2458 55.0598 24.7049 55.684C23.164 56.3081 21.5124 56.6293 19.8445 56.6293C18.1766 56.6293 16.525 56.3081 14.9841 55.684C13.4432 55.0598 12.043 54.145 10.8636 52.9918C9.68426 51.8385 8.74872 50.4695 8.11045 48.9627C7.47217 47.4559 7.14365 45.8409 7.14365 44.21H5.16887Z"
          fill="#D9D9D9"
          fillOpacity={0.01}
          stroke="black"
          strokeWidth={2}
          mask="url(#path-6-inside-1_401_34)"
        />
      </g>
      <path
        id="Line 1"
        d="M6.19315 44.2099L6.19315 14.3343M33.4958 44.21L33.4958 14.3344"
        stroke="black"
        strokeWidth={2}
      />
      <g id="Ellipse 17">
        <mask id="path-8-inside-2_401_34" fill="white">
          <path d="M5.16887 15.1097C5.16887 13.2252 5.54846 11.3591 6.28598 9.61803C7.0235 7.87697 8.1045 6.295 9.46726 4.96245C10.83 3.6299 12.4478 2.57286 14.2284 1.85169C16.0089 1.13052 17.9173 0.759338 19.8445 0.759338C21.7717 0.759338 23.6801 1.13052 25.4606 1.85169C27.2411 2.57286 28.859 3.6299 30.2217 4.96245C31.5845 6.295 32.6655 7.87697 33.403 9.61803C34.1405 11.3591 34.5201 13.2252 34.5201 15.1097L32.5453 15.1097C32.5453 13.4787 32.2168 11.8638 31.5785 10.357C30.9403 8.85022 30.0047 7.48113 28.8253 6.32789C27.646 5.17465 26.2458 4.25985 24.7049 3.63572C23.164 3.01159 21.5124 2.69035 19.8445 2.69035C18.1766 2.69035 16.525 3.01159 14.9841 3.63572C13.4432 4.25985 12.043 5.17464 10.8636 6.32788C9.68426 7.48112 8.74872 8.85022 8.11045 10.357C7.47217 11.8638 7.14365 13.4787 7.14365 15.1097H5.16887Z" />
        </mask>
        <path
          d="M5.16887 15.1097C5.16887 13.2252 5.54846 11.3591 6.28598 9.61803C7.0235 7.87697 8.1045 6.295 9.46726 4.96245C10.83 3.6299 12.4478 2.57286 14.2284 1.85169C16.0089 1.13052 17.9173 0.759338 19.8445 0.759338C21.7717 0.759338 23.6801 1.13052 25.4606 1.85169C27.2411 2.57286 28.859 3.6299 30.2217 4.96245C31.5845 6.295 32.6655 7.87697 33.403 9.61803C34.1405 11.3591 34.5201 13.2252 34.5201 15.1097L32.5453 15.1097C32.5453 13.4787 32.2168 11.8638 31.5785 10.357C30.9403 8.85022 30.0047 7.48113 28.8253 6.32789C27.646 5.17465 26.2458 4.25985 24.7049 3.63572C23.164 3.01159 21.5124 2.69035 19.8445 2.69035C18.1766 2.69035 16.525 3.01159 14.9841 3.63572C13.4432 4.25985 12.043 5.17464 10.8636 6.32788C9.68426 7.48112 8.74872 8.85022 8.11045 10.357C7.47217 11.8638 7.14365 13.4787 7.14365 15.1097H5.16887Z"
          fill="#D9D9D9"
          fillOpacity={0.01}
          stroke="black"
          strokeWidth={2}
          mask="url(#path-8-inside-2_401_34)"
        />
      </g>
      <path
        id="Vector 9"
        d="M11.5976 196.199V202.036M23.7131 185.726L22.2701 188.321V202.036"
        stroke="black"
      />
    </g>
  </svg>
)
}

