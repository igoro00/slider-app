/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: FarmBot (https://sketchfab.com/farmbot)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/farmbot-genesis-v12-track-extrusions-4e5c58043d084583afdfd299fce2615c
title: FarmBot Genesis V1.2 Track Extrusions
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
  }
  materials: {
    ['Scene_-_Root']: THREE.MeshStandardMaterial
  }
}

export default function Extrusion({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/extrusion-transformed.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={[0.5,1,1]}>
      <group position={[-740, -35, 15]} rotation={[0, Math.PI/2, -Math.PI / 2]}>
          <mesh geometry={nodes.Object_2.geometry} material={materials['Scene_-_Root']} />
      </group>
      </group>
    </group>
  )
}

useGLTF.preload('/extrusion-transformed.glb')
