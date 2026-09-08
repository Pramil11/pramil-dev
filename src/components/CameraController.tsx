import { CameraControls } from "@react-three/drei";

import { useEffect, useRef } from "react";

import { usePlanetStore } from "../store/planetStore";


export default function CameraController(){


const controls =
useRef<CameraControls | null>(null);


const introFinished =
usePlanetStore(
state=>state.introFinished
);


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



// responsive camera position only

const getCameraPosition = ()=>{

const width = window.innerWidth;


if(width < 640){

    return {
        x:0,
        y:18,
        z:24
    };

}


if(width < 1024){

    return {
        x:0,
        y:16,
        z:21
    };

}


return {

    x:0,
    y:14,
    z:18

};

};




useEffect(()=>{


if(

controls.current &&

!introFinished

){


const camera =
getCameraPosition();


controls.current.setLookAt(

camera.x,

2,

camera.z,

0,

0,

0,

true

);


}


},[introFinished]);





useEffect(()=>{


if(

introFinished &&

controls.current

){


const camera =
getCameraPosition();


controls.current.setLookAt(

camera.x,

camera.y,

camera.z,

0,

0,

0,

true

);


}


},[introFinished]);





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


const camera =
getCameraPosition();


controls.current.setLookAt(

camera.x,

camera.y,

camera.z,

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