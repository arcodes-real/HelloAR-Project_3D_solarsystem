// import React from "react";





import { useTexture } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from 'three';

export default function Mars() {
    
    const marsRef = useRef();
    const marsPositionRef = useRef(new THREE.Vector3(20, 0, 0)) // Create a reference to the Mars's position vector
    const [hovered, setHovered] = useState(false);
    const [marsTexture] = useTexture(
        ['/assets/2k_mars.jpg'
        ]);
 
        useEffect(() =>{
            document.body.style.cursor = hovered? 'pointer' : 'auto'
        },[hovered])
    

    useFrame(({ clock }) => {
        // Calculate the Mars's position based on its angle from the Sun
        const angle = clock.getElapsedTime() * 0.6
        const distance = 20
        const x = Math.sin(angle) * distance
        const z = Math.cos(angle) * distance
        marsRef.current.position.set(x, 0, z)
        marsRef.current.rotation.y += 0.001
        marsPositionRef.current = marsRef.current.position
    });

    return (
      <group  ref={marsRef}>
         <mesh  castShadow receiveShadow
         onPointerOver={() => setHovered(true)}
         onPointerOut={() => setHovered(false)}>
        {/* args[radius, x-axis, y-axis]*/}
        <sphereGeometry args={[0.6,8,8]} />
        <meshPhongMaterial
         map={marsTexture}
         
         emissiveIntensity={hovered? 20 : 1.5} /> 
         </mesh>
      </group>
  );
  
  
}
