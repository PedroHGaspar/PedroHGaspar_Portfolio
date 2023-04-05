import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Earth = () => {

  const earth = useGLTF('./planet/scene.gltf')

  return (
    <primitive
      object={earth.scene}
      scale={2.6}
      position-t={0}
      rotation-y={0}//rotate just horizontally
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near :0.1,
        far: 200,
        position: [-4, 3, 6]
      }}//this are the best camera positions for this specific layout. 
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate //true
          enableZoom={false} //false
          maxPolarAngle={Math.PI / 2} //this makes the polarAngle 
          minPolarAngle={Math.PI / 2} //this makes the polarAngle 
        />{/*the orbit controls make the moving around the earth possible.  */}
        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas;