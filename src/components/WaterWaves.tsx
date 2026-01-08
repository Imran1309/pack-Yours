
const WaterWaves = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0 pointer-events-none">
      <svg
        className="relative block w-[calc(100%+1.3px)] h-[150px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          fill="#0ea5e9"
          className="opacity-20 animate-wave-slow"
        ></path>
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.12c31-10.33,50.8-29.3,63.5-46.16,24.5-32.55,53.07-59.5,88.7-41.28,34.82,18.17,66.6,63.29,109.84,66.08C570.67,75.48,642.53,7.6,761.59,79.5c51.92,31.34,138.62,60.89,246,12.5C1123,55.33,1166,23.32,1200,0Z"
          fill="#0284c7"
          className="opacity-40 animate-wave-medium"
        ></path>
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          fill="#0369a1"
          className="opacity-60 animate-wave-fast"
        ></path>
      </svg>
      <style>{`
        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-wave-slow { animation: wave 20s linear infinite alternate; }
        .animate-wave-medium { animation: wave 15s linear infinite alternate; }
        .animate-wave-fast { animation: wave 10s linear infinite alternate; }
      `}</style>
    </div>
  );
};

export default WaterWaves;
