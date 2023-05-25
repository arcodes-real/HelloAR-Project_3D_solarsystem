// import React from "react";





import { useTexture } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from 'three';

export default function Venus() {
    
    const venusRef = useRef();
    const venusPositionRef = useRef(new THREE.Vector3(10.9, 0, 0)) // Create a reference to the Earth's position vector
    const [hovered, setHovered] = useState(false);
    const [venusTexture] = useTexture(
        ['/assets/2k_venus_surface.jpg'
        ]);
 
    
        useEffect(() =>{
            document.body.style.cursor = hovered? 'pointer' : 'auto'
        },[hovered])
    
    useFrame(({ clock }) => {
        // Calculate the Venus's position based on its angle from the Sun
        const angle = clock.getElapsedTime() * 0.3
        const distance = 10.9
        const x = Math.sin(angle) * distance
        const z = Math.cos(angle) * distance
        venusRef.current.position.set(x, 0, z)
        venusRef.current.rotation.y += 0.001
        venusPositionRef.current = venusRef.current.position
    });

    return (
      <group  ref={venusRef}>
         <mesh  castShadow receiveShadow
         onPointerOver={() => setHovered(true)}
         onPointerOut={() => setHovered(false)}>
        {/* args[radius, x-axis, y-axis]*/}
        <sphereGeometry args={[1.2,15,15]} />
        <meshPhongMaterial
         map={venusTexture}
         
         emissiveIntensity={hovered? 20 : 1.5} /> 
         </mesh>
      </group>
  );
  
  
}
