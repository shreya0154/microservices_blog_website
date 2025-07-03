
import React from 'react';
import video from '../assets/herovideo.mp4';

const HeroVideo: React.FC = () => {
  return (
    <div className="relative w-full h-[180vh] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />

      
      <div className="absolute bottom-4 right-4 text-white text-sm px-3 py-1 rounded">
        A silhouette worth remembering
      </div>
    </div>
  );
};

export default HeroVideo;
