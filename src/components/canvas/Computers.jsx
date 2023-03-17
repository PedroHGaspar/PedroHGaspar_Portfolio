import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = () => {

  //https://docs.pmnd.rs/react-three-fiber/getting-started/your-first-scene#adding-lights
  //npm install three @react-three/fiber
  //npm install --legacy-peer-deps three

  const computer = useGLTF("./desktop_pc/scene.gltf")

  return (
    <mesh>
      <hemisphereLight intensity={0.15}
        groundColor="black" />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
      />
    </mesh>//for something to appear here, open the link and study the light docs. Everything needs light to appear somewhere.

  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}//x-axis, y-axis and z-axis. https://developer.mozilla.org/en-US/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained
      gl={{ preserveDrawingBuffer: true }}//this value needs to be there to properly render the modal.
    >
      <Suspense fallback={<CanvasLoader />}>{/*This is from react. This allow us to have a loader while our modal is loading.*/}
        <OrbitControls
          enableZoom={false}//cannot zoom
          maxPolarAngle={Math.PI / 2}//this make the rotation controled. It can only rotate in specifics directions, otherwise the modal would be crazy.
          minPolarAngle={Math.PI / 2}//this make the rotation controled. It can only rotate in specifics directions, otherwise the modal would be crazy.
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas