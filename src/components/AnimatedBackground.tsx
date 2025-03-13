
import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays on load
    const video = videoRef.current;
    if (!video) return;
    
    // Handle autoplay
    const playVideo = async () => {
      try {
        await video.play();
      } catch (err) {
        console.error("Error playing video:", err);
      }
    };
    
    playVideo();
    
    // Some browsers need a user interaction to play video
    const handleUserInteraction = () => {
      playVideo();
      // Remove listeners after first interaction
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
    
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);
    
    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);
  
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <video 
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
        poster="https://i.ytimg.com/vi/2Vd1muX2qGU/maxresdefault.jpg"
      >
        <source 
          src="https://www.youtube.com/embed/2Vd1muX2qGU?autoplay=1&controls=0&showinfo=0&autohide=1&loop=1&mute=1"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AnimatedBackground;
