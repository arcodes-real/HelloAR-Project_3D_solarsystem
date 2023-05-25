// import React from "react";





import { useTexture } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from 'three';

export default function Mercury() {
    
    const mercuryRef = useRef();
    const mercuryPositionRef = useRef(new THREE.Vector3(5.8, 0, 0)) // Create a reference to the Earth's position vector
    const [hovered, setHovered] = useState(false);
    const [mercuryTexture] = useTexture(['/assets/2k_mercury.jpg'])
 
    
    useEffect(() =>{
        document.body.style.cursor = hovered? 'pointer' : 'auto'
    },[hovered])

    useFrame(({ clock }) => {
        // Calculate the Earth's position based on its angle from the Sun
        const angle = clock.getElapsedTime() * 0.8
        const distance = 5.8
        const x = Math.sin(angle) * distance
        const z = Math.cos(angle) * distance
        mercuryRef.current.position.set(x, 0, z)
        mercuryRef.current.rotation.y += 0.003
        mercuryPositionRef.current = mercuryRef.current.position
    });

    return (
      <group ref={mercuryRef} >
        <mesh castShadow receiveShadow
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)} >

        {/* args[radius, x-axis, y-axis]*/}
        <sphereGeometry args={[0.4,6,6]} />
        <meshPhongMaterial
         map={mercuryTexture}
         emissiveIntensity={hovered? 20 : 1.5} /> 
         </mesh>
      </group>
  );
  
  
}
