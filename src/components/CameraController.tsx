import { CameraControls } from "@react-three/drei";
import { useEffect, useRef } from "react";


type Props = {

target:
[number,number,number] | null;

};



export default function CameraController({

target

}:Props){


const controls =
useRef<CameraControls | null>(null);



useEffect(()=>{


if(
target &&
controls.current
){


controls.current.setLookAt(

target[0],
target[1],
target[2] + 6,


target[0],
target[1],
target[2],


true

);


}


},[target]);



return (

<CameraControls

ref={controls}

smoothTime={1.2}

maxDistance={50}

minDistance={2}

/>

)

}