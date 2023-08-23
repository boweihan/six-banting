import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const Panorama = ({ imageLocation }: { imageLocation: string }) => {
  const myTexture = useTexture(imageLocation);

  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[500, 60, 60]} />
      <meshBasicMaterial
        attach="material"
        map={myTexture}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default Panorama;
