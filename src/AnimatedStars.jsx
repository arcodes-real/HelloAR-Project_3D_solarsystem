//Component used to Animate the stars using useRef

import { Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function AnimatedStars() {

    //setup useRef
    const starsRef = useRef();

    //setup useFrame
    
    useFrame(() => {
        starsRef.current.rotation.x += 0.0001;
        starsRef.current.rotation.y += 0.0001
        starsRef.current.rotation.z += 0.0001
    });


  return <Stars ref= {starsRef}/>
    
  
}
