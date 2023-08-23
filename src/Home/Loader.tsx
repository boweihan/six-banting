import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  console.log(progress);

  return (
    <Html center className="loader">
      <h1>...</h1>
    </Html>
  );
};

export default Loader;
