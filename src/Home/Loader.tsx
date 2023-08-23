import { Html, useProgress } from "@react-three/drei";

type LoaderProps = {
  showProgress: boolean;
};

const Loader = ({ showProgress }: LoaderProps) => {
  const { progress } = useProgress();

  return (
    <Html center className="loader">
      <h1>{showProgress ? `${Math.round(progress)}% loaded` : ""}...</h1>
    </Html>
  );
};

export default Loader;
