import { OrbitControls } from "@react-three/drei";

const Control = () => {
	return <OrbitControls target={[0, 0, 0]} minDistance={5} maxDistance={50} zoomSpeed={1} panSpeed={0.5} enableDamping />;
};

export default Control;
