import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei/core";
import { Home } from "../Home";
import { Suspense } from "react";
import Loader from "../Home/Loader";

import "./Canvas.css";

const AppCanvas = () => {
  return (
    // create the canvas
    <div className="canvas-container">
      <Canvas>
        <ambientLight />
        <PerspectiveCamera />
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          zoomSpeed={0.2}
          enableDamping
        />
        <Suspense fallback={<Loader />}>
          <Home />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default AppCanvas;
