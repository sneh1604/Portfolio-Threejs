import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations, useVideoTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const SciFiComputer = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/scificomputer.glb');
  const { actions } = useAnimations(animations, group);

  // Load video texture
  const videoTexture = useVideoTexture(
    props.texture ? props.texture : '/textures/project/movie1.mp4'
  );

  useEffect(() => {
    if (videoTexture) {
      videoTexture.flipY = true; // Flip the video texture for the first screen
    }
  }, [videoTexture]);

  // GSAP animation for rotation effect
  useGSAP(() => {
    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: 'power3.out',
    });
  }, [videoTexture]);

  return (
    <group ref={group} {...props} dispose={null} scale={0.004}>
      <group>
        {/* First display screen */}
        <group position={[0, 28.869, 312.193]} rotation={[-1.469, 0, 0]} scale={120}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_digital_displays_0.geometry}
            material={materials.digital_displays}>
            {/* Add flipped video texture */}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_digital_display_sides_0.geometry}
            material={materials.digital_display_sides}
          />
        </group>

        {/* Second display screen */}
        <group position={[0, 381.812, -82.657]} rotation={[-0.429, 0, 0]} scale={130}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_digital_displays_0.geometry}
            material={materials.digital_displays}>
            {/* Keep the original video texture for the second screen */}
            <meshBasicMaterial map={videoTexture} toneMapped={false} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_digital_display_sides_0.geometry}
            material={materials.digital_display_sides}
          />
        </group>

        {/* Main body */}
        <group position={[0, 0, -94.762]} rotation={[0, Math.PI / 2, 0]} scale={123.801}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_metal_2_0.geometry}
            material={materials.metal_2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_metal_1_0.geometry}
            material={materials.metal_1}
          />
        </group>
      </group>
    </group>
  );
};

export default SciFiComputer;

useGLTF.preload('/models/scificomputer.glb');
