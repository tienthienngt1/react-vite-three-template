import { useCursor, softShadows, Sky, Stars, Stats, Cloud } from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame, MeshProps } from "@react-three/fiber";
const EnviromentCustom = () => {
	return (
		<>
			<Stars fade speed={10} factor={2} saturation={10} />
			<Stats />
			<Sky distance={450000} sunPosition={[100, 5, -100]} inclination={0} rayleigh={1} azimuth={0.25} />
			<mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, -0.75, 0]}>
				<planeGeometry args={[20, 20]} />
				<shadowMaterial opacity={0.2} />
			</mesh>
			<Cloud position={[0, 10, -10]} />
			<Stair name={"stair-"} rotation={[-Math.PI / 2, 0, Math.PI]} position={[0, 0, 0]} />

			{/* HELPER */}
			<axesHelper />
		</>
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

export default EnviromentCustom;
