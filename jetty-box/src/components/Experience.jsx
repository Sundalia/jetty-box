import { OrbitControls } from "@react-three/drei";
// import { Avatar } from "./Avatar";
import { ModelBox } from "./ModelBox";
import { ModelBox2 } from "./ModelBox2";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      {/* <Avatar /> */}
      <ambientLight />
      <directionalLight
        position={[0, 5, 1]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <ModelBox2 />
      {/* <ModelBox /> */}
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>

      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[-110, 0, 0]}
        receiveShadow
      >
        {/* <planeBuffer args={[10, 10, 1, 1]} /> */}
        <shadowMaterial transparent opacity={0.6} />
      </mesh>
      <ambientLight intensity={1} />
      {/* <OrbitControls
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2.5}
      /> */}
    </>
  );
};
