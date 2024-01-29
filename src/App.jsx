import { Suspense, useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Model } from './Scene1'
import { OrbitControls, Environment } from '@react-three/drei';
import * as Skel from './Skel'
import * as Demon from './Demon'
import * as Rock from './Rock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Canvas
        shadows
      >
        <OrbitControls />
        <Suspense>
          <Environment 
            files="/UNDERWATER-HDRI.hdr"
            background={false}
          />
          <ambientLight intensity={0.1} />
          <spotLight position={[5, 12, -5]} angle={0.3} penumbra={1} castShadow />

          <Skel.Model />
          <Demon.Model />
          <Rock.Model />
        </Suspense>
      </Canvas>
    </>
  )
}

export default App
