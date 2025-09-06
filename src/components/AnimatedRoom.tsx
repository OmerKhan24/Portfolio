import React from "react";
import Image from "next/image";

interface AnimatedRoomProps {
  imageSrc: string; // transparent PNG of your gamer room
  duration?: number; // loop duration in seconds
}

const AnimatedRoom: React.FC<AnimatedRoomProps> = ({
  imageSrc,
}) => {
  return (
    <div className="relative flex items-center ml-5 transform translate-x-40">
      {/* Clean gaming setup image */}
      <Image
        src={imageSrc}
        alt="Gaming Setup"
        width={800}
        height={600}
        className="w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] h-auto object-contain max-w-none"
        style={{
          filter: "drop-shadow(0 0 20px rgba(59,130,246,0.4)) drop-shadow(0 0 40px rgba(147,51,234,0.3))"
        }}
        priority
      />
    </div>
  );
};

export default AnimatedRoom;
