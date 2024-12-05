import { useState } from "react";

  const ProgressLine: React.FC = () => {
    // State for progress value (0 to 100)
    const [progress, setProgress] = useState<number>(50);
  
    return (
      <div className="flex flex-col items-center gap-4">
        {/* Linear Progress Bar */}
        <div className="w-full bg-[#F8F4F0] rounded h-3 relative">
          <div
            className="bg-[#277C78] rounded h-full transition-all duration-300"
            style={{ width: `${progress}%` }} // Dynamically set width based on progress
          />
        </div>
  
        {/* Input for setting progress */}
        {/* <input
          type="number"
          // value={progress}
          onChange={(e) => {
            const value = Math.min(100, Math.max(0, Number(e.target.value))); // Restrict between 0 and 100
            setProgress(value);
          }}
          placeholder="Enter percentage (0-100)"
          className="border border-gray-300 p-2 rounded w-32 text-center"
        />
  
        <p className="text-gray-700">Progress: {progress}%</p> */}
      </div>
    );
  };
  
  export default ProgressLine;
  