import { XYZLoader } from "three-stdlib";
import { useLoader } from "@react-three/fiber";

export function useXYZ<T extends string | string[]>(path: T) {
  const xyz = useLoader(XYZLoader, path);
  return xyz;
}

useXYZ.preload = (path: string | string[]) =>
  useLoader.preload(XYZLoader, path);

useXYZ.clear = (input: string | string[]) => useLoader.clear(XYZLoader, input);
