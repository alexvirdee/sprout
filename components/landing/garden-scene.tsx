"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

/**
 * Garden hero scene — a stylized sprout in soft golden light with floating
 * pollen and gentle leaves. Performance-tuned: low-poly geometry, no shadows
 * on mobile, particle count auto-scales by viewport.
 */

function Pollen({ count = 60 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 7;
      arr[i * 3 + 1] = Math.random() * 4 - 1;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    const pos = ref.current.geometry.attributes.position as THREE.BufferAttribute;
    const arr = pos.array as Float32Array;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += delta * 0.08 + Math.sin(t * 0.4 + i) * 0.001;
      arr[i * 3 + 0] += Math.sin(t * 0.3 + i * 0.7) * 0.002;
      if (arr[i * 3 + 1] > 3.2) arr[i * 3 + 1] = -1.2;
    }
    pos.needsUpdate = true;
    ref.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#F4B942"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function Leaf({
  position,
  rotation,
  color,
  scale = 1,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  color: string;
  scale?: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  const baseRot = rotation ?? [0, 0, 0];

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.z = baseRot[2] + Math.sin(t * 0.9 + position[0]) * 0.08;
    ref.current.rotation.x = baseRot[0] + Math.sin(t * 0.6 + position[1]) * 0.04;
  });

  // Build a leaf shape (almond/ovoid) and extrude slightly
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.bezierCurveTo(0.4, 0.2, 0.5, 0.9, 0, 1.3);
    shape.bezierCurveTo(-0.5, 0.9, -0.4, 0.2, 0, 0);
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.06,
      bevelEnabled: true,
      bevelSegments: 2,
      bevelSize: 0.04,
      bevelThickness: 0.04,
      curveSegments: 12,
    });
    geo.center();
    return geo;
  }, []);

  return (
    <mesh ref={ref} position={position} rotation={baseRot} scale={scale} geometry={geometry} castShadow>
      <meshStandardMaterial color={color} roughness={0.55} metalness={0.0} />
    </mesh>
  );
}

function Sprout() {
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = Math.sin(t * 0.4) * 0.06;
    group.current.position.y = -0.45 + Math.sin(t * 0.8) * 0.02;
  });

  return (
    <group ref={group}>
      {/* Pot */}
      <mesh position={[0, -1.05, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.9, 0.72, 0.85, 36]} />
        <meshStandardMaterial color="#C86B3C" roughness={0.85} />
      </mesh>
      <mesh position={[0, -0.62, 0]} castShadow>
        <torusGeometry args={[0.92, 0.07, 12, 36]} />
        <meshStandardMaterial color="#B25A2E" roughness={0.7} />
      </mesh>

      {/* Soil */}
      <mesh position={[0, -0.6, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.88, 0.88, 0.08, 36]} />
        <meshStandardMaterial color="#5A4634" roughness={1} />
      </mesh>

      {/* Stem */}
      <mesh position={[0, 0.05, 0]} castShadow>
        <cylinderGeometry args={[0.045, 0.06, 1.4, 12]} />
        <meshStandardMaterial color="#3D9A41" roughness={0.6} />
      </mesh>

      {/* Leaves — fan out at the top */}
      <Leaf position={[-0.45, 0.55, 0.05]} rotation={[0.1, 0.2, -0.7]} color="#4CAF50" scale={1.05} />
      <Leaf position={[0.45, 0.55, 0.05]} rotation={[0.1, -0.2, 0.7]} color="#A8C686" scale={1.05} />
      <Leaf position={[0, 0.85, 0.1]} rotation={[0.15, 0, 0]} color="#66BC6A" scale={0.95} />
      <Leaf position={[-0.25, 0.3, -0.15]} rotation={[0.0, 0.3, -1.0]} color="#3D9A41" scale={0.7} />
      <Leaf position={[0.28, 0.3, -0.15]} rotation={[0.0, -0.3, 1.0]} color="#82C985" scale={0.7} />
    </group>
  );
}

function Scene({ mouse }: { mouse: { x: number; y: number } }) {
  const camera = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (!camera.current) return;
    // Gentle parallax — slow lerp toward mouse
    const targetX = mouse.x * 0.45;
    const targetY = -mouse.y * 0.25 + 0.05;
    camera.current.position.x += (targetX - camera.current.position.x) * 0.04;
    camera.current.position.y += (targetY - camera.current.position.y) * 0.04;
    camera.current.rotation.y = -mouse.x * 0.08;
  });

  return (
    <>
      {/* Warm sunlight */}
      <ambientLight intensity={0.55} color="#FCEDC4" />
      <directionalLight
        position={[4.5, 6, 3]}
        intensity={1.5}
        color="#FDEFC9"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-3, 2, -2]} intensity={0.35} color="#A8C686" />

      <group ref={camera}>
        <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.55} floatingRange={[-0.05, 0.05]}>
          <Sprout />
        </Float>
      </group>

      <Pollen count={typeof window !== "undefined" && window.innerWidth < 640 ? 28 : 56} />

      <ContactShadows
        position={[0, -1.5, 0]}
        opacity={0.32}
        scale={6}
        blur={2.6}
        far={3}
        color="#5A4634"
      />
    </>
  );
}

function NoWebGLFallback() {
  return (
    <div
      aria-hidden
      className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-meadow"
    >
      <div className="absolute -right-16 -top-16 h-64 w-64 blob bg-sprout-100/70 blur-xl" />
      <div className="absolute -bottom-16 -left-10 h-56 w-56 blob bg-gold-100/60 blur-xl" />
      <div className="flex h-full items-center justify-center text-7xl">🌱</div>
    </div>
  );
}

function detectWebGL(): boolean {
  if (typeof window === "undefined") return true;
  try {
    const canvas = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

export function GardenScene() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [supported, setSupported] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSupported(detectWebGL());
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      setMouse({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!supported) {
    return (
      <div className="h-full w-full">
        <NoWebGLFallback />
      </div>
    );
  }

  return (
    <div
      ref={wrapperRef}
      className="relative h-full w-full overflow-hidden rounded-2xl"
      aria-hidden
    >
      <Canvas
        camera={{ position: [0, 0.4, 4.2], fov: 36 }}
        dpr={[1, 1.7]}
        shadows
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <Scene mouse={reducedMotion ? { x: 0, y: 0 } : mouse} />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}
