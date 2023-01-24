import { Cloud, Sky, Stars, Stats } from "@react-three/drei";

const Enviroment = () => {
	return (
		<>
			<Stars fade speed={10} factor={2} saturation={10} />
			<Stats />
			<Sky distance={450000} sunPosition={[100, 5, -100]} inclination={0} rayleigh={10} azimuth={0.25} />
			<mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, -0.75, 0]}>
				<planeGeometry args={[20, 20]} />
				<shadowMaterial opacity={0.2} />
			</mesh>
			<axesHelper />
		</>
	);
};

export default Enviroment;
