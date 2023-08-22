import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center className="loader">
      <h1>{progress} % loaded...</h1>
    </Html>
  );
};

export default Loader;
