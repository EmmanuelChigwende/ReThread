import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const LoadingAnimation = () => {
  const dotsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(dotsRef.current, {
      y: -12,
      duration: 0.4,
      ease: "power2.out",
      stagger: 0.15,
    }).to(dotsRef.current, {
      y: 0,
      duration: 0.4,
      ease: "power2.in",
      stagger: 0.15,
    });

    return () => tl.kill();
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            ref={(el) => (dotsRef.current[i] = el)}
            className="h-[30px] w-[30px] bg-secondary rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingAnimation;
