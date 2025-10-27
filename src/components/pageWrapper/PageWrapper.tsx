import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const el = containerRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );

    return () => {
      gsap.to(el, {
        opacity: 0,
        y: -30,
        duration: 0.4,
        ease: "power1.inOut",
      });
    };
  }, [location.pathname]);

  return (
    <div ref={containerRef} className="min-h-screen">
      {children}
    </div>
  );
};
