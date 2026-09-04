export default function Sun(){


return (

<>


<mesh>


<sphereGeometry

args={[
1.5,
64,
64
]}

/>


<meshStandardMaterial

color="#ffaa33"

emissive="#ff9900"

emissiveIntensity={3}

/>


</mesh>



<pointLight

position={[0,0,0]}

color="#ffcc66"

intensity={8}

distance={50}

/>


</>


)

}