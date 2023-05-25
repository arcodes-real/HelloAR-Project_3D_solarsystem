// import React from "react";





import { useTexture } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import { useRef, useEffect, useState} from "react";
import * as THREE from 'three';


export default function Earth() {
    
    const earthRef = useRef();
    const earthPositionRef = useRef(new THREE.Vector3(15, 0, 0)) // Create a reference to the Earth's position vector
    const [hovered, setHovered] = useState(false);
    const [planetDetails, setPlanetDetails] = useState("");
    const [earthTexture, earthEmissiveMap] = useTexture(
        ['/assets/2k_earth_daymap.jpg',
         '/assets/2k_earth_nightmap.jpg'
        ]);
 
    
    useEffect(() =>{
        document.body.style.cursor = hovered? 'pointer' : 'auto'
    },[hovered])


    useFrame(({ clock }) => {
        // Calculate the Earth's position based on its angle from the Sun
        const angle = clock.getElapsedTime() * 0.5
        const distance = 15
        const x = Math.sin(angle) * distance
        const z = Math.cos(angle) * distance
        earthRef.current.position.set(x, 0, z)
        earthRef.current.rotation.y += 0.002
        earthPositionRef.current = earthRef.current.position
    });

    function handleClick(){
        const planetName = "Earth";
        setPlanetDetails(planetName);
    }

    return (
      <group  ref={earthRef}>
         <mesh  castShadow receiveShadow
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={handleClick}
          >
          {planetDetails && (
            <div className="planet-name">
                <p>{planetDetails}</p>
            </div>
          )}


        {/* args[radius, x-axis, y-axis]*/}
        <sphereGeometry args={[1.2,32,32]} />
        <meshPhongMaterial
         map={earthTexture}
         shininess={1000}
         emissiveMap={earthEmissiveMap}
         emissiveIntensity={hovered? 20 : 1.5} /> 
         </mesh>
      </group>
  );
  
  
}
