// D:\yeamin student\PixelandCode Web\pixelandcode\src\app\components\shared\PixelCodeLogo3D.tsx
'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Environment,
  PerspectiveCamera,
  Center,
} from '@react-three/drei';
import * as THREE from 'three';
import { SVGLoader } from 'three-stdlib';

const svgData = `
<svg
  id="Layer_1"
  data-name="Layer 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 2047.88 1852.16"
>
  <path
    style="fill:currentColor"
    d="M926.1,1163.22q0,84.22,0,168.46c0,18.81.07,18.49-18.17,18.71-25.33.3-50.65,1.6-76,1.68-85.84.25-171.67-.12-257.5.48-12,.09-14.37-4.92-14.32-14.79.15-28.68.09-57.36.09-86,0-86.45.2-172.9-.27-259.35-.06-11.51,3.74-14.39,14.61-14.35q165.4.51,330.83.28c18.43,0,18.44,0,18.45-18.24q0-90.28,0-180.57,0-74.82,0-149.63c0-14.06,2.82-16.81,17-16.82q163.61-.13,327.21-.23c4,0,8.46.86,12-.49,12.54-4.74,14.28,3.33,14.3,12,.16,114.32,0,228.65.23,343,0,11.4-6.56,11.7-15.07,11.69q-168.46-.18-336.91-.06c-16.86,0-16.62,0-16.58,17C926.17,1051.73,926.09,1107.47,926.1,1163.22Z"
    transform="translate(-555.32 -610.92)"
  />
  <path
    style="fill:currentColor"
    d="M925.87,2094h-351c-18.78,0-19.51-.76-19.5-19.91,0-63.41-.25-126.83.11-190.24.25-43.7,1.38-87.38,2.08-131.07.06-4,.6-8.27-.39-12.07-2.61-10,3.59-12.24,10.94-12.59,10.47-.51,21-.06,31.49-.06,103,0,206,.17,309-.3,12-.06,15.94,2.87,15.88,15.42-.46,101.79-.23,203.58-.2,305.36,0,11.63.4,23.27-.08,34.88-.34,8.35,3.2,9.94,10.9,9.82,30.55-.47,61.12-.1,91.67-.29,33-.21,65.91-.93,98.87-1,27.72-.07,55.43.48,83.15.7,23.76.19,47.53.56,71.29.32,10.66-.1,16,2.53,13.55,14.76-1.29,6.47.73,13.53.73,20.33q.1,158.74,0,317.48c0,17.54,0,17.49-17.32,17.49q-167.22,0-334.44.06c-16.88,0-16.57-.07-16.84-16.88-.38-23.93-1.58-47.85-1.88-71.78q-.51-40.55,0-81.12c.37-30.64,1.55-61.27,1.84-91.91C926.13,2166.37,925.87,2131.34,925.87,2094Z"
    transform="translate(-555.32 -610.92)"
  />
  <path
    style="fill:currentColor"
    d="M1915.46,960.49c41.91,23.15,81.69,45.15,121.52,67,2.64,1.45,5.78,2,8.61,3.12,8.18,3.34,11,8.37,8.09,17.65-8,25.29-14.88,50.9-22.45,76.32-6.69,22.45-14,44.73-20.49,67.24-6.57,22.69-12.4,45.6-18.77,68.36-6,21.49-12.37,42.88-18.48,64.34-6.46,22.7-12.73,45.45-19.25,68.14-6.73,23.42-13.8,46.75-20.44,70.2-4,14.23-7.41,28.64-11.28,42.92-3,10.94-6.3,21.79-9.38,32.71-12.85,45.72-25.42,91.52-38.6,137.15-8.85,30.66-19,60.94-27.74,91.64-9,31.83-16.54,64.08-25.42,96-6.3,22.65-14.06,44.89-20.63,67.46s-12.42,45.45-18.73,68.15c-3.15,11.36-6.74,22.6-10,34-2.14,7.56-4.41,15.13-5.77,22.85-1.78,10.05-7.8,13.26-16.65,8.34-37.44-20.79-74.82-41.71-112.46-62.15-10.36-5.62-13-11.91-8.8-23.46,5.58-15.52,8.71-31.92,13.07-47.9,2.75-10,5.8-20,8.75-30,9.73-33,19.9-65.91,29.11-99.08,9-32.34,16.56-65.06,25.52-97.41,8.6-31,18.48-61.74,27.22-92.76,6.51-23.11,12-46.51,18.14-69.72,3.24-12.23,7-24.3,10.43-36.48,7.15-25.5,14-51.07,21.38-76.5,6.78-23.4,14.4-46.57,21-70,6.51-23,11.89-46.41,18.41-69.46,6.27-22.12,13.65-43.93,20-66,6.15-21.42,11.46-43.07,17.46-64.53,4.33-15.51,9.2-30.86,13.8-46.29,3.1-10.42,6.49-20.77,9.15-31.3,3.3-13.06,5.35-26.46,9.06-39.39C1898.61,1014.78,1907,988.19,1915.46,960.49Z"
    transform="translate(-555.32 -610.92)"
  />
  <path
    style="fill:currentColor"
    d="M1138.46,1530.5,1557,1113.16l4.06,2.88c-.7,8.48-2,17-2,25.44-.16,58.39.15,116.79-.37,175.17-.06,6.24-2.86,14.08-7.17,18.4q-95.47,95.85-191.92,190.72c-6.34,6.25-6.41,10.61-.44,16.43q65,63.36,129.92,126.83c20.18,19.7,40.64,39.12,60.46,59.18,3.58,3.62,6.54,9.71,6.58,14.68.53,62.37.48,124.74.51,187.11,0,2.48-.66,5-1.65,12Z"
    transform="translate(-555.32 -610.92)"
  />
  <path
    style="fill:currentColor"
    d="M2187.72,1944.68c-1.19-8.13-2.29-12.16-2.3-16.18-.1-58.81-.34-117.61.32-176.41.08-7.07,3.43-15.91,8.36-20.83q94.37-94.07,189.84-187c6.63-6.49,6.88-9.94-.1-16.84Q2288.4,1433,2194,1337.52c-4.87-4.93-8.17-13.68-8.25-20.71-.67-57.47-.43-115-.36-172.43,0-4.11.85-8.21,1.59-14.93,4.86,3.75,7.69,5.54,10.06,7.82,57.55,55.48,115.43,110.63,172.46,166.63,68.94,67.69,137.11,136.15,205.7,204.19,7.51,7.44,15.44,14.47,23.44,21.39,5.26,4.56,6.43,8.32.79,13.79q-88.87,86.2-177.5,172.69-107.29,104.32-214.65,208.6C2201.74,1930,2196.44,1935.72,2187.72,1944.68Z"
    transform="translate(-555.32 -610.92)"
  />
</svg>
`;

interface SVGModelProps {
  fillColor?: string;
}

function SVGModel({ fillColor = '#3B82F6' }: SVGModelProps) {
  const groupRef = useRef<THREE.Group>(null!);

  const shapes = useMemo(() => {
    const loader = new SVGLoader();
    const data = loader.parse(svgData);
    const paths = data.paths;
    const allShapes: THREE.Shape[] = [];

    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      const pathShapes = path.toShapes(true);

      pathShapes.forEach(shape => {
        allShapes.push(shape);
      });
    }

    return allShapes;
  }, []);

  // Professional Multi-Axis Animation with Floating & Pulsing
  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Smooth multi-axis rotation (cinematic feel)
      groupRef.current.rotation.y = Math.sin(time * 0.3) * 0.3 + time * 0.15;
      groupRef.current.rotation.x = Math.cos(time * 0.2) * 0.1;
      groupRef.current.rotation.z = Math.sin(time * 0.15) * 0.05;
      
      // Floating effect (up and down)
      groupRef.current.position.y = Math.sin(time * 0.5) * 0.5;
      
      // Subtle scale pulsing (breathing effect)
      const scale = 0.005 + Math.sin(time * 0.8) * 0.0002;
      groupRef.current.scale.setScalar(scale);
    }
  });

  return (
    <Center>
      <group ref={groupRef} scale={0.005}>
        {shapes.map((shape, i) => (
          <mesh key={i} castShadow receiveShadow>
            <extrudeGeometry args={[shape, { depth: 100, bevelEnabled: true, bevelThickness: 2, bevelSize: 1 }]} />
            <meshPhysicalMaterial
              color={fillColor}
              metalness={0.9}
              roughness={0.1}
              clearcoat={1.0}
              clearcoatRoughness={0.1}
              reflectivity={1}
              transmission={0.1}
              thickness={0.5}
              ior={1.5}
              emissive={fillColor}
              emissiveIntensity={0.2}
            />
          </mesh>
        ))}
      </group>
    </Center>
  );
}

export function PixelLogo3DAnimation() {
  return (
    <div className="h-full w-full">
      <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <React.Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={50} />
          
          {/* Professional Studio Lighting Setup */}
          <ambientLight intensity={0.3} />
          
          {/* Main Key Light */}
          <directionalLight 
            position={[10, 10, 10]} 
            intensity={1} 
            castShadow
            shadow-mapSize={[2048, 2048]}
          />
          
          {/* Blue Rim Light */}
          <spotLight
            position={[-10, 15, -5]}
            angle={0.3}
            penumbra={0.5}
            intensity={2}
            castShadow
            color="#3B82F6"
          />
          
          {/* Orange Fill Light */}
          <spotLight
            position={[10, -10, 10]}
            angle={0.3}
            penumbra={0.5}
            intensity={1.5}
            color="#F59E0B"
          />
          
          {/* Pink Accent Light */}
          <pointLight position={[0, 0, 15]} intensity={1} color="#EC4899" />
          
          {/* Cinematic Environment */}
          <Environment preset="sunset" />
          
          <SVGModel fillColor="#3B82F6" />
        </React.Suspense>
      </Canvas>
    </div>
  );
}