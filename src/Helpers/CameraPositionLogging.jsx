// import React from 'react';
import { useThree } from 'react-three-fiber';
import { useEffect, useRef } from 'react';

export default function CameraPositionLogging(event) {

   
   //creating the custom camera component for position logging on refreshes
   
    const {camera} = useThree();
    const cameraRef = useRef()

  useEffect(() => {
    const logCameraPosition = () => {
      const { x, y, z } = cameraRef.current.position
      const roundX = Math.round(x * 100) / 100
      const roundY = Math.round(y * 100) / 100
      const roundZ = Math.round(z * 100) / 100
      console.log(`Camera position: x: ${roundX}, y: ${roundY}, z: ${roundZ}`)
    }

    cameraRef.current = camera
    window.addEventListener(event, logCameraPosition)

    return () => {
      window.removeEventListener(event, logCameraPosition)
    }
  }, [camera, event])

  return null
}
