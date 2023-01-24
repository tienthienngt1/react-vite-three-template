import { BakeShadows } from "@react-three/drei";

const Light = () => {
	return (
		<>
			{/* Fill */}
			<ambientLight intensity={0.5} />
			{/* Main */}
			<directionalLight
				position={[1, 10, -2]}
				intensity={1}
				shadow-camera-far={70}
				shadow-camera-left={-10}
				shadow-camera-right={10}
				shadow-camera-top={10}
				shadow-camera-bottom={-10}
				shadow-mapSize={[512, 512]}
				castShadow
			/>
			{/* Strip */}
			<directionalLight position={[-10, -10, 2]} intensity={3} />
			<BakeShadows />
		</>
	);
};

export default Light;
