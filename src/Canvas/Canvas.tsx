import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei/core";
import Loader from "../Home/Loader";
import { Panorama } from "../Panorama";
import { ImagePicker } from "../ImagePicker";
import { images, imagePrefix } from "../constants";
import { Footer } from "../Footer";
import ReactHowler from "react-howler";
import music from "../assets/song.mp3";

import "./Canvas.css";

const AppCanvas = () => {
  const [imageSrc, setImageSrc] = useState<string>(images.entrance.src);

  return (
    <div className="canvas-container">
      <ImagePicker
        images={images}
        selectedImageSrc={imageSrc}
        setImageSrc={setImageSrc}
      />
      <Canvas style={{ transform: "scaleX(-1)" }}>
        <ambientLight intensity={3} />
        <PerspectiveCamera />
        <OrbitControls
          maxPolarAngle={(2 * Math.PI) / 3} // 30 degrees above horizontal plane
          minPolarAngle={Math.PI / 3} // 30 degrees below horizontal plane
          zoomSpeed={0.2}
          enableDamping
        />
        <Suspense fallback={<Loader />}>
          <Panorama imageLocation={`${imagePrefix}${imageSrc}`} />
        </Suspense>
      </Canvas>
      <Footer />
      <ReactHowler src={music} loop={true} volume={0.5} />
    </div>
  );
};

export default AppCanvas;
