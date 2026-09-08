import { usePlanetStore } from "../store/planetStore";


export default function Sun(){


const setTargetPlanet =
usePlanetStore(
state=>state.setTargetPlanet
);


const targetPlanet =
usePlanetStore(
state=>state.targetPlanet
);


const exploreMode =
usePlanetStore(
state=>state.exploreMode
);



const isSelected =
targetPlanet?.name === "Sun";



return (

<>


<mesh

visible={
!exploreMode || isSelected
}


scale={
isSelected ? 0.5 : 1
}


onClick={()=>{


if(

exploreMode &&

!isSelected

){

return;

}



setTargetPlanet({

name:"Sun",

position:[0,0,0]

});


}}

>


<sphereGeometry

args={[
2,
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

visible={
!exploreMode || isSelected
}

position={[0,0,0]}

color="#ffcc66"

intensity={8}

distance={50}

/>



</>


)

}