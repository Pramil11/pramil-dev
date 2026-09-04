import Sun from "./Sun";
import Planet from "./Planet";


export default function SolarSystem(){


return (

<>


{/* Sun */}

<Sun />



{/* Mercury */}

<Planet

name="Mercury"

texture="/textures/mercury.jpg"

position={[-3,2,0]}

size={0.3}

/>



{/* Venus */}

<Planet

name="Venus"

texture="/textures/venus.jpg"

position={[3,2.4,0.5]}

size={0.5}

/>



{/* Earth */}

<Planet

name="Earth"

texture="/textures/earth.jpg"

position={[-6,2.2,0]}

size={0.65}

/>



{/* Mars */}

<Planet

name="Mars"

texture="/textures/mars.jpg"

position={[0,-4.,0]}

size={0.45}

/>



{/* Jupiter */}

<Planet

name="Jupiter"

texture="/textures/jupiter.jpg"

position={[-6,-2.3,0]}

size={1.35}

/>



{/* Saturn */}

<Planet

name="Saturn"

texture="/textures/saturn.jpg"

position={[7,0.4,0]}

size={1.15}

/>



{/* Uranus */}

<Planet

name="Uranus"

texture="/textures/uranus.jpg"

position={[4.5,-4.5,0]}

size={0.9}

/>



{/* Neptune */}

<Planet

name="Neptune"

texture="/textures/neptune.jpg"

position={[0,5,-2]}

size={0.9}

/>


</>

)

}