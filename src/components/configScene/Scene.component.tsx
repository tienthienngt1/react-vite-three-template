import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Camera from "./Camera.component";
import Control from "./Control.component";
import Light from "./Light.component";
import EnviromentCustom from "./EnviromentCustom.component";

const Scene = () => {
	return (
		<Suspense fallback={null}>
			<Canvas shadows>
				<Camera />
				<Control />
				<Light />
				<EnviromentCustom />
			</Canvas>
		</Suspense>
	);
};

export default Scene;
