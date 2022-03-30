import { Paper } from "@mui/material";
import { useSpring } from "@react-spring/three";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef } from "react";
import Extrusion from "./Extrusion";
import Scene from "./Scene";

type Props = {
	yaw:number,
	pitch:number,
};

const SliderModel: React.FC<Props> = ({yaw,pitch}) => {

	return (
		<Paper elevation={6} style={{width:"100%"}}>
			<Canvas
				style={{ height: "300px"}}
				// orthographic
				camera={{ zoom: 35, position: [0, 4, 5], rotation: [-0.6, 1, 0], far:10000 }}
			>
				{/* Idk why but without this camera the model doesnt show up */}
				<OrbitControls enablePan={false} enableRotate={false} enableZoom={false}/>
				<ambientLight intensity={0.2} />
				<directionalLight position={[-2, 5, 2]} intensity={1} />
				<Suspense fallback={null}>
					{/* <Camera /> */}
					<Extrusion scale={0.001}/>
					<Scene rotation={[0, Math.PI, 0]} yaw={yaw} pitch={pitch}/>
				</Suspense>
			</Canvas>
		</Paper>
	);
};

export default SliderModel;
