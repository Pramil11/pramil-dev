import { useTexture, Html } from "@react-three/drei";
import * as THREE from "three";


type Props = {

    texture:string;

    position:[
        number,
        number,
        number
    ];

    size:number;

    name:string;

};



export default function Planet({

    texture,
    position,
    size,
    name

}:Props){


const map = useTexture(texture);



return (

<group position={position}>


    {/* Planet */}

    <mesh>


        <sphereGeometry

        args={[
            size,
            64,
            64
        ]}

        />


        <meshStandardMaterial

            map={map}

            roughness={0.55}

            metalness={0.05}

            emissive="#111111"

            emissiveIntensity={0.2}

            />



    </mesh>



    {/* Planet glow */}

    <mesh>


        <sphereGeometry

        args={[
            size * 1.08,
            64,
            64
        ]}

        />


        <meshBasicMaterial

        color="#ffffff"

        transparent

        opacity={0.05}

        side={THREE.BackSide}

        />



    </mesh>



    {/* Name label */}

    <Html

    center

    distanceFactor={12}

    >

        <div

        style={{

            color:"white",

            background:"rgba(0,0,0,0.55)",

            padding:"5px 12px",

            borderRadius:"12px",

            fontSize:"14px",

            border:"1px solid rgba(255,255,255,0.2)",

            backdropFilter:"blur(8px)"

        }}

        >

            {name}

        </div>


    </Html>



</group>


)


}