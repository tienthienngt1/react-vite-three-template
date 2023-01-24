import { useState, useRef } from "react";
import { MeshProps, Canvas, useFrame } from "@react-three/fiber";
import { useCursor, softShadows } from "@react-three/drei";
import "./App.css";
import Scene from "components/configScene/Scene.component";

export default function App() {
	return (
		<>
			<Scene />
		</>
	);
}
