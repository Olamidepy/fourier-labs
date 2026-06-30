import React from "react";
import LoadingSpinner from "./ui/LoadingSpinner";

export const Loading: React.FC = () => {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center space-y-4">
      <LoadingSpinner size={36} label="Initializing system integrity diagnostics..." />
      <div className="w-48 bg-white/5 h-1 rounded-full overflow-hidden relative">
        <div className="bg-cyan-500 h-full w-1/3 rounded-full animate-[loading-bar_1.5s_infinite_ease-in-out]" />
      </div>
      <style jsx global>{`
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  );
};

export default Loading;
