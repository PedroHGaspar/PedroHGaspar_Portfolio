import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {

  //https://docs.pmnd.rs/react-three-fiber/getting-started/your-first-scene#adding-lights
  //npm install three @react-three/fiber
  //npm install --legacy-peer-deps three

  const computer = useGLTF("./desktop_pc/scene.gltf")

  return (
    <mesh>
      <hemisphereLight intensity={0.15}
        groundColor="black" />
      <pointLight intensity={1} />{/*this is the pointlight that appears in the screen. Its almost like the pointlight is an eye. */}
      <spotLight
        position={[-20, 50, 10]}//it makes the light stays almost at the top of the pc.
        angle={0.12}//not so sure what it does...
        penumbra={2}//like a gradient
        intensity={0.8}//intensity of the light
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.15, -1.5]}//this is te position he is on the screen. x, y, z
        rotation={[-0.01, -0.2, -0.070]}//this is the rotation x y z for the computer
      />
    </mesh>//for something to appear here, open the link and study the light docs. Everything needs light to appear somewhere.
    //this return has 3 main lights: hemisphereLight, pointlight and spotlight.
    //it also has a primitive object, that is the computer. Any 3d object can be used to do anything, i just have to study more about this and explore more options.
  )
}

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);


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
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas