import { PerspectiveCamera } from "@react-three/drei";

const Camera = () => {
	return (
		<>
			<PerspectiveCamera makeDefault fov={75} position={[10, 10, 10]} />
		</>
	);
};

export default Camera;
