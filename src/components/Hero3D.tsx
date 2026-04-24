"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

function seededRandom(seed: number) {
  const value = Math.sin(seed) * 10000;
  return value - Math.floor(value);
}

function WireframeSystem({ isPointerActive, reducedMotion }: { isPointerActive: boolean; reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const targetPosition = useRef(new THREE.Vector3(0, 0, 0));
  const { pointer } = useThree();

  const particles = useMemo(() => {
    const positions = new Float32Array(180 * 3);

    for (let index = 0; index < 180; index += 1) {
      const radius = 3.2 + seededRandom(index + 11) * 2.4;
      const angle = seededRandom(index + 29) * Math.PI * 2;
      positions[index * 3] = Math.cos(angle) * radius;
      positions[index * 3 + 1] = (seededRandom(index + 47) - 0.5) * 4.6;
      positions[index * 3 + 2] = Math.sin(angle) * radius * 0.55;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  const orbitGeometry = useMemo(() => new THREE.TorusGeometry(2.75, 0.004, 8, 140), []);

  useFrame(({ clock }) => {
    if (!groupRef.current) {
      return;
    }

    const elapsed = clock.getElapsedTime();
    const targetX = reducedMotion || !isPointerActive ? 0.08 : pointer.y * 0.28;
    const targetY = reducedMotion || !isPointerActive ? -0.18 + elapsed * 0.025 : pointer.x * 0.34 + elapsed * 0.025;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.075);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.075);

    if (!reducedMotion && isPointerActive) {
      targetPosition.current.set(pointer.x * 0.22, pointer.y * 0.16, 0);
      groupRef.current.position.lerp(targetPosition.current, 0.055);
    } else {
      targetPosition.current.set(0, 0, 0);
      groupRef.current.position.lerp(targetPosition.current, 0.055);
    }

    if (coreRef.current && !reducedMotion) {
      coreRef.current.rotation.x = elapsed * 0.18;
      coreRef.current.rotation.y = elapsed * 0.24;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={0.78}>
      <points geometry={particles}>
        <pointsMaterial color="#67e8f9" size={0.018} transparent opacity={0.48} />
      </points>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.28, 2]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.82} />
      </mesh>
      <mesh rotation={[0.7, 0.2, 0.15]}>
        <icosahedronGeometry args={[2.55, 1]} />
        <meshBasicMaterial color="#020617" wireframe transparent opacity={0.52} />
      </mesh>
      <mesh geometry={orbitGeometry} rotation={[1.18, 0.2, 0.1]}>
        <meshBasicMaterial color="#22c55e" transparent opacity={0.26} />
      </mesh>
      <mesh geometry={orbitGeometry} rotation={[1.46, 0.05, 1.22]}>
        <meshBasicMaterial color="#67e8f9" transparent opacity={0.22} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.055, 16, 16]} />
        <meshBasicMaterial color="#f8fafc" />
      </mesh>
    </group>
  );
}

export function Hero3D() {
  const reducedMotion = Boolean(useReducedMotion());
  const [isPointerActive, setIsPointerActive] = useState(false);

  return (
    <div
      className="h-full w-full opacity-90"
      aria-hidden="true"
      onPointerEnter={() => setIsPointerActive(true)}
      onPointerLeave={() => setIsPointerActive(false)}
    >
      <Canvas camera={{ position: [0, 0, 6], fov: 46 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.25} />
        <pointLight position={[3, 2.5, 4]} intensity={2.8} color="#67e8f9" />
        <pointLight position={[0, -3, 2]} intensity={1.4} color="#22c55e" />
        <WireframeSystem isPointerActive={isPointerActive} reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}
