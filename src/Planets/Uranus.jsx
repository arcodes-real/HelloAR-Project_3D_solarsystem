// import React from "react";





import { useTexture } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from 'three';

export default function Uranus() {
    
    const uranusRef = useRef();
    const uranusPositionRef = useRef(new THREE.Vector3(42, 0, 0)) // Create a reference to the uranus's position vector
    const [hovered, setHovered] = useState(false);
    const [uranusTexture] = useTexture(
        ['/assets/2k_uranus.jpg'
        ]);
 
        useEffect(() =>{
            document.body.style.cursor = hovered? 'pointer' : 'auto'
        },[hovered])
    

    useFrame(({ clock }) => {
        // Calculate the uranus's position based on its angle from the Sun
        const angle = clock.getElapsedTime() * 0.39
        const distance = 42
        const x = Math.sin(angle) * distance
        const z = Math.cos(angle) * distance
        uranusRef.current.position.set(x, 0, z)
        uranusRef.current.rotation.y += 0.007
        uranusPositionRef.current = uranusRef.current.position
    });

    return (
      <group  ref={uranusRef}>
         <mesh  castShadow receiveShadow
         onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}>
        {/* args[radius, x-axis, y-axis]*/}
        <sphereGeometry args={[1.9,32,32]} />
        <meshPhongMaterial
         map={uranusTexture}
         
         emissiveIntensity={hovered? 20 : 1.5} /> 
         </mesh>
      </group>
  );
  
  
}
