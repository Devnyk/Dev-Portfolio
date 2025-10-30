import { useState, useEffect, useRef } from 'react';

const LiquidPhotoTransition = () => {
  const [showMobileLabel, setShowMobileLabel] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile || !containerRef.current) return;

    const handleScroll = () => {
      const rect = containerRef.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;

      if (isInView) {
        setShowMobileLabel(true);

        // Clear existing timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        // Hide after 3 seconds
        timeoutRef.current = setTimeout(() => {
          setShowMobileLabel(false);
        }, 3000);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isMobile]);

  return (
    <div ref={containerRef} className="relative w-full max-w-md mx-auto">
      {/* Professional Photo Container */}
      <div className="smooth-photo-container relative w-96 h-[28rem] rounded-2xl overflow-hidden mx-auto group">
        {/* Simple Blue Border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Inner Container */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <img
            src="/dev1.png"
            alt="Debasish Nayak"
            className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500 ease-out"
          />

          {/* Glassmorphism Label Slide Up */}
          <div className={`absolute bottom-0 left-0 right-0 bg-black/35 backdrop-blur-md border-t border-white/10 transform transition-transform duration-400 ease-out rounded-b-2xl ${isMobile
              ? (showMobileLabel ? 'translate-y-0' : 'translate-y-full')
              : 'translate-y-full group-hover:translate-y-0'
            }`}>
            <div className="px-4 py-4 flex items-center justify-center gap-1">
              <i className="ri-arrow-up-line text-white text-lg transform rotate-45"></i>
              <div className="flex items-center gap-1">
                <span className="text-white font-satoshi font-normal text-base">
                  a.k.a{' '}
                </span>
                <span className="text-blue-500 font-satoshi font-bold text-base">
                  dev
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquidPhotoTransition;