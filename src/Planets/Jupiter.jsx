// import React from "react";





import { useTexture } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from 'three';

export default function Jupiter() {
    
    const jupiterRef = useRef();
    const jupiterPositionRef = useRef(new THREE.Vector3(30, 0, 0)) // Create a reference to the Jupiter's position vector
    const [hovered, setHovered] = useState(false);
    const [jupiterTexture] = useTexture(
        ['/assets/2k_jupiter.jpg'
        ]);
 
    
        useEffect(() =>{
            document.body.style.cursor = hovered? 'pointer' : 'auto'
        },[hovered])
    
    useFrame(({ clock }) => {
        // Calculate the Jupiter's position based on its angle from the Sun
        const angle = clock.getElapsedTime() * 0.2
        const distance = 30
        const x = Math.sin(angle) * distance
        const z = Math.cos(angle) * distance
        jupiterRef.current.position.set(x, 0, z)
        jupiterRef.current.rotation.y += 0.0002
        jupiterPositionRef.current = jupiterRef.current.position
    });

    return (
      <group  ref={jupiterRef}>
         <mesh  castShadow receiveShadow
         onPointerOver={() => setHovered(true)}
         onPointerOut={() => setHovered(false)}>
        {/* args[radius, x-axis, y-axis]*/}
        <sphereGeometry args={[3,32,32]} />
        <meshPhongMaterial
         map={jupiterTexture}
         
         emissiveIntensity={hovered? 20 : 1.5} /> 
         </mesh>
      </group>
  );
  
  
}
