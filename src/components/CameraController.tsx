import { CameraControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { usePlanetStore } from "../store/planetStore";


export default function CameraController(){


const controls =
useRef<CameraControls | null>(null);



const targetPlanet =
usePlanetStore(
state=>state.targetPlanet
);



const openPanel =
usePlanetStore(
state=>state.openPanel
);

const exploreMode =
usePlanetStore(
state=>state.exploreMode
);

useEffect(()=>{


if(

targetPlanet &&

controls.current

){


controls.current.setLookAt(

targetPlanet.position[0],

targetPlanet.position[1],

targetPlanet.position[2] + 8,


targetPlanet.position[0],

targetPlanet.position[1],

targetPlanet.position[2],


true

);




// wait for camera movement

setTimeout(()=>{

openPanel();

},1300);



}


},[targetPlanet]);

useEffect(()=>{


if(
!exploreMode &&
controls.current
){

controls.current.setLookAt(

0,
14,
18,

0,
0,
0,

true

);


}


},[exploreMode]);

return (

<CameraControls

ref={controls}

smoothTime={1.2}

maxDistance={50}

minDistance={2}

enabled={!exploreMode}
/>

)


}