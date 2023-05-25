

import { useTexture } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from 'three';

export default function Saturn() {
    
    const saturnRef = useRef();
    const saturnPositionRef = useRef(new THREE.Vector3(38, 0, 0)) // Create a reference to the Saturn's position vector
    const [hovered, setHovered] = useState(false);
    const [saturnTexture] = useTexture(
        ['/assets/Saturn.jpeg'
        ]);
 
    
        useEffect(() =>{
            document.body.style.cursor = hovered? 'pointer' : 'auto'
        },[hovered])
    
    useFrame(({ clock }) => {
        // Calculate the Saturn's position based on its angle from the Sun
        const angle = clock.getElapsedTime() * 0.55
        const distance = 38
        const x = Math.sin(angle) * distance
        const z = Math.cos(angle) * distance
        saturnRef.current.position.set(x, 0, z)
        saturnRef.current.rotation.y += 0.04
        saturnPositionRef.current = saturnRef.current.position
    });

    return (
      <group  ref={saturnRef}>
         <mesh  castShadow receiveShadow
         onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}>
        {/* args[radius, x-axis, y-axis]*/}
        <sphereGeometry args={[2,32,32]} />
        <meshPhongMaterial
         map={saturnTexture}
        //  normalMap={saturnRingTexture}
         
         
        emissiveIntensity={hovered? 20 : 1.5} /> 
         </mesh>
      </group>
  );
  
  
}
