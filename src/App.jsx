/* eslint-disable react/no-unknown-property */
import { Suspense, useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Model } from './Scene1'
import { OrbitControls, Environment } from '@react-three/drei';
import * as Skel from './Skel'
import * as Demon from './Demon'
import * as Rock from './Rock'

function App() {
  const [anim, setAnim] = useState(1)

  const animClicked = (e) => {
    if (e.button === 1) {
      if (anim < 4) setAnim(prev => prev +1)
      else setAnim(1)
    }
  }

  return (
    <>
      <Canvas
        shadows
        onMouseDown={animClicked}
        camera={{ position: [0,1,3]}}
      >
        <OrbitControls />
        <Suspense>
          {/* <Environment 
            files="/background.hdr"
            background={false}
            castShadow
            backgroundIntensity={0.1}
          /> */}
          <ambientLight intensity={1.99} />
          <spotLight 
            position={[0, 10, 0]} 
            angle={0.3} 
            penumbra={1} 
            castShadow 
            intensity={500}
            color="#EE9988"
          />

          <group position={[0,-1,0]}>
            <Skel.Model anim={anim} />
            <Demon.Model anim={anim} />
            <Rock.Model />
          </group>
        </Suspense>
      </Canvas>
    </>
  )
}

export default App
