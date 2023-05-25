import { useTexture } from '@react-three/drei'
// import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'

const Sun = () => {
    const sunRef = useRef()
    const [hovered, setHovered] = useState(false);
    const [sunTexture] = useTexture(["/assets/2k_sun.jpg"])
  
    // useFrame(() => {
    //   // Axis Rotation
    //   sunRef.current.rotation.y -= 0.002
    // })

    useEffect(() => {
        document.body.style.cursor = hovered? 'pointer' : 'cursor'
    }, [hovered]);
  
    return (
      <mesh
       ref={sunRef}
       position={[0, 0, 0]}
       onPointerOver={() => setHovered(true)}
       onPointerOut={() => setHovered(false)}>

        {/* Radius , X-axis , Y-axis */}
        <sphereGeometry args={[5.5, 32, 32]} />
        <meshPhongMaterial
          map={sunTexture}
          emissiveMap={sunTexture}
          emissiveIntensity={hovered? 2.3 : 1.5}
          emissive={0xffffff}
        />
        <pointLight castShadow />
      </mesh>
    )
  }
  
  export default Sun;