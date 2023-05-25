
import { useHelper } from '@react-three/drei';
import AnimatedStars from './AnimatedStars';
import { useRef } from 'react';
import CameraPositionLogging from './Helpers/CameraPositionLogging';
// import { Perf } from 'r3f-perf'; to check and log the performance of the system


import * as THREE from "three";


import Sun from './Sun';
import Mercury from './Planets/Mercury';
import Venus from './Planets/Venus';
import Earth from './Planets/Earth';
import Mars from './Planets/Mars';
import Jupiter from './Planets/Jupiter';
import Saturn from './Planets/Saturn';
import Uranus from './Planets/Uranus';
import Neptune from './Planets/Neptune';




export default function MainContainer() {

  const directionLightRef = useRef();
  const directionalLightRefTwo = useRef()
  useHelper(directionLightRef, THREE.DirectionalLightHelper, 1, 'hotpink')
  useHelper(directionalLightRefTwo, THREE.DirectionalLightHelper, 1, 'hotpink')
  return (
    
      <> 
        {/* <Perf /> */}
        <CameraPositionLogging event="mousedown"/>
        <AnimatedStars />
       

        {/* <directionalLight
         ref={directionLightRef}
         position={[0, 0, 10]}
         intensity={1}
        //  color={0xff0000} 
        />

        <directionalLight ref={directionalLightRefTwo} position={[0, 0, -10]} /> */}
        <Sun />
        <Mercury />
        <Venus />
        <Earth />
        <Mars />
        <Jupiter />
        <Saturn />
        <Uranus />
        <Neptune />
      </>

  );
}
