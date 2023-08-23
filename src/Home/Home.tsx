import { useGLTF } from "@react-three/drei";
// import { useXYZ } from "../hooks/useXYZ";
// import { XYZLoader } from "three-stdlib"
// @ts-ignore
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
// @ts-ignore
// import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
// import { useLoader } from "@react-three/fiber";

// const loader = new XYZLoader();
// loader.load("../assets/cloud.xyz", function (geometry) {
//   geometry.center();

//   const material = new THREE.PointsMaterial({ size: 0.1 });

//   points = new THREE.Points(geometry, material);
//   scene.add(points);
// });

const Home = () => {
  const gltf = useGLTF("../assets/home.gltf");
  // const xyz = useXYZ("../assets/cloud.xyz");
  // const materials = useLoader(
  //   MTLLoader,
  //   "/assets/a90affaeb9dd4e8db14f9a6b81a36a75.mtl"
  // );
  // const obj = useLoader(
  //   OBJLoader,
  //   "/assets/a90affaeb9dd4e8db14f9a6b81a36a75.obj",
  //   (loader) => {
  //     materials.preload(), loader.setMaterials(materials);
  //   }
  // );

  gltf.scene.rotation.x = -Math.PI / 2;

  return <primitive object={gltf.scene} />;
};

export default Home;
