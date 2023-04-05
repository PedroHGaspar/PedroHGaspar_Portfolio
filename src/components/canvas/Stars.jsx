import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, Preload, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';


const Stars = (props) => {
//this component STARS make the stars in the back of the section.
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 })
  //in the 12th line, the state is never used, BUT, in this case, the starts are using that prop to recognize like an useState
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 14
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}// Min distance between previous and current point
        frustumCulled //When this is set, it checks every frame if the object is in the frustum of the camera before rendering the object. If set to false the object gets rendered every frame even if it is not in the frustum of the camera. Default is true.
        {...props}
      >
        <PointMaterial 
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas
        camera={{ position: [0, 0, 1] }}//this value works the best
      >
        <Suspense fallback={null}>{/*this fallback=null because it can load really quickly*/}
          <Stars />
        </Suspense>
        <Preload all />{/*all things will be preload */}
      </Canvas>
    </div>
  )
}

export default StarsCanvas