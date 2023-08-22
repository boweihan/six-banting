import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei/core";
import { Suspense } from "react";
import Loader from "../Home/Loader";
import Panorama from "../Panorama/Panorama";

import "./Canvas.css";

const AppCanvas = () => {
  return (
    // create the canvas
    <div className="canvas-container">
      <Canvas>
        <ambientLight intensity={3} />
        <PerspectiveCamera />
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          zoomSpeed={0.2}
          enableDamping
        />
        <Suspense fallback={<Loader />}>
          <Panorama imageLocation="/assets/360/6-Banting-Drive-Backrooms-08222023_122743.jpg" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default AppCanvas;
