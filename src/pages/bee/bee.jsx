import React from 'react'
import { useGLTF } from "@react-three/drei";


const Bee = () => {

    const { scene } = useGLTF("/bee.glb");

  return (
     <primitive object={scene} scale={0.5} />
  )
}

export default Bee