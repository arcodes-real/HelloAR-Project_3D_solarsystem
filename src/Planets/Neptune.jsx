// import React from "react";

import { useTexture } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from 'three';

export default function Neptune() {
    
    const neptuneRef = useRef();
    const neptunePositionRef = useRef(new THREE.Vector3(48, 0, 0)) // Create a reference to the neptune's position vector
    const [hovered, setHovered] = useState(false);
    const [neptuneTexture] = useTexture(
        ['/assets/2k_neptune.jpg'
        ]);
 
    
        useEffect(() =>{
            document.body.style.cursor = hovered? 'pointer' : 'auto'
        },[hovered])
    
    useFrame(({ clock }) => {
        // Calculate the neptune's position based on its angle from the Sun
        const angle = clock.getElapsedTime() * 0.68
        const distance = 48
        const x = Math.sin(angle) * distance
        const z = Math.cos(angle) * distance
        neptuneRef.current.position.set(x, 0, z)
        neptuneRef.current.rotation.y += 0.0001
        neptunePositionRef.current = neptuneRef.current.position
    });

    return (
      <group  ref={neptuneRef}>
         <mesh  castShadow receiveShadow
         onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}>
        {/* args[radius, x-axis, y-axis]*/}
        <sphereGeometry args={[1.7,32,32]} />
        <meshPhongMaterial
         map={neptuneTexture}
         
         emissiveIntensity={hovered? 20 : 1.5} /> 
         </mesh>
      </group>
  );
  
  
}
