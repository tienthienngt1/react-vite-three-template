import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, MeshProps } from "@react-three/fiber";
import Camera from "./Camera.component";
import Control from "./Control.component";
import Light from "./Light.component";
import Enviroment from "./Enviroment.component";
import { useCursor, softShadows } from "@react-three/drei";

const Scene = () => {
	return (
		<Suspense fallback={null}>
			<Canvas shadows>
				<Camera />
				<Control />
				<Light />
				<Enviroment />
				<Stair name={"stair-"} rotation={[-Math.PI / 2, 0, Math.PI]} position={[0, 0, 0]} />
			</Canvas>
		</Suspense>
	);
};

function Stair(props: MeshProps) {
	const ref = useRef() as any;
	const [hovered, setHovered] = useState(false);
	const [clicked, setClicked] = useState(false);
	useFrame((state) => {
		ref.current.scale.setScalar(hovered ? 1 + Math.sin(state.clock.elapsedTime * 10) / 50 : 1);
	});

	// Sets document.body.style.cursor: useCursor(flag, onPointerOver = 'pointer', onPointerOut = 'auto')
	useCursor(hovered);
	return (
		<mesh
			{...props}
			ref={ref}
			receiveShadow
			castShadow
			onClick={(e) => (e.stopPropagation(), setClicked(!clicked))}
			onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
			onPointerOut={() => setHovered(false)}
		>
			<boxGeometry args={[2, 6, 0.075]} />
			<meshStandardMaterial roughness={1} transparent opacity={0.6} color={clicked ? "lightblue" : hovered ? "aquamarine" : "white"} />
		</mesh>
	);
}

// Percentage closer soft shadows, normally *very* expensive
softShadows();

export default Scene;
