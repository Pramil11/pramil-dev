import { Stars } from "@react-three/drei";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";


export default function SpaceBackground(){

const background = useTexture(
    "/textures/background.png"
);


return(

<>


{/* Galaxy background image */}

<mesh

position={[0,0,-80]}

scale={[100,60,1]}

>

<planeGeometry />


<meshBasicMaterial

map={background}

side={THREE.BackSide}

/>


</mesh>



{/* Extra small stars */}

<Stars

radius={150}

depth={100}

count={3000}

factor={2}

saturation={0}

fade

speed={0.1}

/>


</>

)

}