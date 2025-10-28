import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

export const NotFound = () => {
  const container = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const el = container.current;
    const tl = gsap.timeline();

    // 🌀 Animation sequence
    tl.fromTo(
      el,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.out" }
    )
      .fromTo(
        ".error-code",
        { scale: 0, rotate: -15, opacity: 0 },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.3"
      )
      .fromTo(
        ".error-text",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        ".back-btn",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      );
  }, []);

  return (
    <div
      ref={container}
      className="flex flex-col items-center justify-center min-h-screen text-white"
    >
      <h1 className="error-code text-8xl font-extrabold text-red-600 mb-4 drop-shadow-lg">
        404
      </h1>
      <p className="error-text text-lg text-gray-300 mb-8 tracking-widest">
        Oops! The page you’re looking for doesn’t exist 🎬
      </p>
      <button
        onClick={() => {
          gsap.to(container.current, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => navigate("/"),
          });
        }}
        className="back-btn bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
      >
        ← Go Back Home
      </button>
    </div>
  );
};
