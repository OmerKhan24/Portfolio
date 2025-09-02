import React from "react";

interface AnimatedRoomProps {
  imageSrc: string; // transparent PNG of your gamer room
  duration?: number; // loop duration in seconds
}

const AnimatedRoom: React.FC<AnimatedRoomProps> = ({
  imageSrc,
  duration = 5,
}) => {
  return (
    <div className="relative flex items-center justify-center w-full">
      {/* Clean gaming setup image */}
      <img
        src={imageSrc}
        alt="Gaming Setup"
        className="w-full h-full object-contain"
        style={{
          filter: "drop-shadow(0 0 20px rgba(59,130,246,0.4)) drop-shadow(0 0 40px rgba(147,51,234,0.3))"
        }}
      />
    </div>
  );
};

export default AnimatedRoom;
