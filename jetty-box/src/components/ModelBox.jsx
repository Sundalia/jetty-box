import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export function ModelBox(props) {
  const group = useRef();
  const { camera } = useThree(); // Получаем доступ к камере

  const { nodes, materials, animations } = useGLTF("models/AnimaBox.glb");
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    // Запускаем анимацию
    console.log("actions:", actions);
    console.log("names:", names);
    // actions.ArmatureAction.play();

    // actions[names[1]].reset().play();
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Empty001" rotation={[Math.PI / 2, 0, 0]} />
        <group
          name="Armature"
          position={[0, 0, 0]}
          scale={[0.195, 0.239, 0.195]}
        >
          <skinnedMesh
            name="Cube"
            geometry={nodes.Cube.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.Cube.skeleton}
          />
          <skinnedMesh
            castShadow
            name="Cube001"
            geometry={nodes.Cube001.geometry}
            material={materials.Material}
            skeleton={nodes.Cube001.skeleton}
          />
          <primitive object={nodes.Bone} />
        </group>
        <mesh
          visible={false}
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials["Material.002"]}
          position={[0, 12.68, -1.981]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.592}
        >
          <mesh
            visible={false}
            name="Cube002"
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials["Material.003"]}
            position={[0.727, 0.805, 6.102]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.25}
          />
          <mesh
            visible={false}
            name="Cube003"
            castShadow
            receiveShadow
            geometry={nodes.Cube003.geometry}
            material={materials["Material.003"]}
            position={[-0.769, 0.805, 6.102]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.25}
          />
          <mesh
            name="Cube004"
            visible={false}
            castShadow
            receiveShadow
            geometry={nodes.Cube004.geometry}
            material={materials["Material.003"]}
            position={[-0.009, 0.422, 6.102]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.25}
          />
          <mesh
            visible={false}
            name="Plane001"
            castShadow
            receiveShadow
            geometry={nodes.Plane001.geometry}
            material={materials["Material.004"]}
            position={[0, 1.844, 6.335]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1.688}
          />
        </mesh>
        <mesh
          name="Plane002"
          visible={false}
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials["Material.005"]}
          position={[0, 11.533, -0.418]}
          rotation={[0.673, 0, 0]}
          scale={[0.268, 1, 0.032]}
        />
        <mesh
          name="Plane003"
          visible={false}
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials["Material.006"]}
          position={[-0.05, 10.931, -1.043]}
          rotation={[Math.PI / 2, 0.255, 0]}
          scale={[0.095, 1, 0.033]}
        />
        <mesh
          visible={false}
          name="Plane004"
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials["Material.006"]}
          position={[-0.05, 10.931, -1.043]}
          rotation={[Math.PI / 2, 0.255, 0]}
          scale={[0.095, 1, 0.033]}
        />
        <mesh
          name="Plane005"
          castShadow
          visible={false}
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials["Material.006"]}
          position={[-0.05, 10.931, -1.043]}
          rotation={[Math.PI / 2, 0.255, 0]}
          scale={[0.095, 1, 0.033]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/AnimaBox.glb");
