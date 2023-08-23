import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei/core";
import { VRButton, XR, Controllers, Hands } from "@react-three/xr";
import { OrbitControls } from "../lib/OrbitControls";
import Loader from "../Home/Loader";
import { Panorama } from "../Panorama";
import { ImagePicker } from "../ImagePicker";
import { Music } from "../Music";
import { images, imagePrefix } from "../constants";
import { Footer } from "../Footer";
import { Toggle, Home } from "../Home";

import "./Canvas.css";

const AppCanvas = () => {
  const [imageSrc, setImageSrc] = useState<string>(images.frontYard.src);
  const [show3DModel, setShow3DModel] = useState<boolean>(false);

  return (
    <div className="canvas-container">
      {!show3DModel && (
        <ImagePicker
          images={images}
          selectedImageSrc={imageSrc}
          setImageSrc={setImageSrc}
        />
      )}
      <Toggle
        toggled={show3DModel}
        onToggle={() => setShow3DModel(!show3DModel)}
      />
      <VRButton />

      <Canvas style={{ transform: show3DModel ? "none" : "scaleX(-1)" }}>
        <XR>
          <Controllers />
          <Hands />
          <ambientLight intensity={3} />
          <PerspectiveCamera />
          <OrbitControls
            maxPolarAngle={(2 * Math.PI) / 3} // 30 degrees above horizontal plane
            minPolarAngle={Math.PI / 3} // 30 degrees below horizontal plane
            zoomSpeed={1}
            enableDamping
            reverseVerticalOrbit
          />
          <Suspense fallback={<Loader showProgress={show3DModel} />}>
            {show3DModel ? (
              <Home />
            ) : (
              <Panorama imageLocation={`${imagePrefix}${imageSrc}`} />
            )}
          </Suspense>
        </XR>
      </Canvas>
      <Footer />
      <Music />
    </div>
  );
};

export default AppCanvas;
