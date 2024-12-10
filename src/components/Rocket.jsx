import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

export function Model(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("models/robot.glb");

  // GSAP Animation: Bounce effect
  React.useEffect(() => {
    if (groupRef.current) {
      gsap.to(groupRef.current.position, {
        y: groupRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  // GSAP Hover Shake
  const handlePointerOver = () => {
    gsap.to(groupRef.current.rotation, {
      x: "+=0.1",
      y: "+=0.1",
      duration: 0.2,
      repeat: 5,
      yoyo: true,
      ease: "power1.inOut",
    });
  };

  const handlePointerOut = () => {
    gsap.to(groupRef.current.rotation, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "power1.inOut",
    });
  };

  return (
    <group
      {...props}
      ref={groupRef}
      dispose={null}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0.2, 0]}  scale={1.5}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials.Material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_13.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_14.geometry}
              material={materials["Material.002"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials["Material.001"]}
            position={[0, -1.3, 0]}
            scale={[0.8, 0.5, 0.5]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_16.geometry}
            material={materials["Material.002"]}
            position={[0, 0, 0.129]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_18.geometry}
            material={materials.material_0}
            position={[0, -1.487, 0]}
            scale={3}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/robot.glb");

export default Model;
