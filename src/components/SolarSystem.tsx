import { useThree } from "@react-three/fiber";

import Sun from "./Sun";
import Planet from "./Planet";


export default function SolarSystem(){


const { viewport } = useThree();


// Responsive scale
const scale =
viewport.width < 8
?
0.75
:
viewport.width < 12
?
0.9
:
1;



return (

<group scale={scale}>


{/* Sun */}

<Sun />



{/* Mercury */}

<Planet

name="Mercury"

texture="/textures/mercury.jpg"

position={[-3,2,-3]}

size={0.5}

/>



{/* Venus */}

<Planet

name="Venus"

texture="/textures/venus.jpg"

position={[4,3,1]}

size={0.65}

/>



{/* Earth */}

<Planet

name="Earth"

texture="/textures/earth.jpg"

position={[-6,4,2]}

size={0.7}

/>



{/* Mars */}

<Planet

name="Mars"

texture="/textures/mars.jpg"

position={[-2,-5,1]}

size={0.6}

/>



{/* Jupiter */}

<Planet

name="Jupiter"

texture="/textures/jupiter.jpg"

position={[-9,-3.3,3]}

size={1.35}

/>



{/* Saturn */}

<Planet

name="Saturn"

texture="/textures/saturn.jpg"

position={[10,0.4,0]}

size={1.15}

/>



{/* Uranus */}

<Planet

name="Uranus"

texture="/textures/uranus.jpg"

position={[6.5,-8,0]}

size={0.9}

/>



{/* Neptune */}

<Planet

name="Neptune"

texture="/textures/neptune.jpg"

position={[0,7,-2]}

size={0.9}

/>


</group>

)

}