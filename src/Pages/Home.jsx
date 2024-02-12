import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../Components/Loader'
import { Island } from '../Models/Island'
import { Sky } from '../Models/Sky'
import { Bird } from "../Models/Bird";
import { Plane } from '../Models/Plane'
import { Fox } from "../Models/Fox"

export default function Home() {
  const [isRotating, setIsRotating] = useState(false);
  const [CurrentStage, setCurrentStage] = useState(1)

  const screenSize = () => {
    let screenScale = null, ScreenPosition = [0, -6.5, -43], rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, ScreenPosition, rotation];
  }

  const planeSize = () => {
    let screenScale, ScreenPosition;
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      ScreenPosition = [0, -1.5, 0]
    } else {
      screenScale = [3, 3, 3]
      ScreenPosition = [0, -4, -4]
    }
    return [screenScale, ScreenPosition];
  }
  const [islandScale, islandPosition, islandRotation] = screenSize();
  const [planeScale, PlanePosition] = planeSize();

  return (
    <section className='w-full h-screen relative'>
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{ near: 0.1, far: 1000 }} >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2.5} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
          <Sky />
          <Bird />
          <Plane planeScale={planeScale} PlanePosition={PlanePosition} isRotating={setIsRotating} rotation={[0, 20, 0]} />
          {/* <Fox/> */}
          <Island position={islandPosition} scale={islandScale} rotation={islandRotation} setCurrentStage={setCurrentStage} />
        </Suspense>
      </Canvas>
    </section>
  )
}