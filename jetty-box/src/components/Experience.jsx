import { OrbitControls } from "@react-three/drei";
import { ModelBox } from "./ModelBox";
import { Avatar } from "./Avatar";

export const Experience = () => {
  return (
    <>
      {/* <OrbitControls /> */}
      {/* <Avatar /> */}
      <ambientLight />
      <directionalLight
        position={[0, 5, 1]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <ModelBox scale={[2, 2, 2]} position={[0, -0.7, 0]} />

      {/* <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeBufferGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.6} />
      </mesh> */}
      <ambientLight intensity={1} />
      <OrbitControls
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2.5}
        enableZoom={false}
      />
    </>
  );
};
