// import React, { useState } from "react";
import * as style from "../styles/portfolio.module.css";
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const Portfolio = () => {

  // function Box(props) {
  //   // This reference will give us direct access to the mesh
  //   const mesh = useRef()
  //   // Set up state for the hovered and active state
  //   const [hovered, setHover] = useState(false)
  //   const [active, setActive] = useState(false)
  //   // Subscribe this component to the render-loop, rotate the mesh every frame
  //   useFrame((state, delta) => (mesh.current.rotation.x += 0.05))
  //   // Return view, these are regular three.js elements expressed in JSX
  //   return (
  //     <mesh
  //       {...props}
  //       ref={mesh}
  //       scale={active ? 3 : 2}
  //       onClick={(event) => setActive(!active)}
  //       onPointerOver={(event) => setHover(true)}
  //       onPointerOut={(event) => setHover(false)}>
  //       <boxGeometry args={[1, 1, 1]} />
  //       <meshStandardMaterial color={hovered ? 'skyblue' : 'green'} />
  //     </mesh>
  //   )
  // }

  const [active, setActive] = useState(false);

  const classToggle = () => {
    setActive(!active)
  }

  return(
    <>
      <div className={style.test}>
        <h1 className={active ? style.red : ""}>Hello, world!</h1>
        <button onClick={classToggle} className={style.btn}>classNameをつけたり外したりする</button>
      </div>
      {/* <div className={style.test}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-4, 0, 0]} />
          <Box position={[4, 0, 0]} />
        </Canvas>
      </div> */}

    </>
  )
}

export default Portfolio