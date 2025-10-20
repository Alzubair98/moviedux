import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Header } from "./components/Header";

const App = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      x: -300,
      rotation: -360,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Header />
      </div>

      <footer>
        <p className="footer">footer content</p>
      </footer>
    </div>
    // <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
    //   <div className="text-center">
    //     <h1 className="text-6xl font-bold text-white mb-8">React 19 + GSAP</h1>

    //     <div
    //       ref={boxRef}
    //       className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-red-500 rounded-lg shadow-2xl mx-auto"
    //     />

    //     <p className="text-white text-xl mt-8">see the box moving</p>
    //   </div>
    // </div>
  );
};

export default App;
