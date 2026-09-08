import { useTexture, Html } from "@react-three/drei";
import * as THREE from "three";
import {usePlanetStore} from "../store/planetStore";


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


const setTargetPlanet =
usePlanetStore(
    state=>state.setTargetPlanet
);

const selectedPlanet =
usePlanetStore(
    state=>state.selectedPlanet
);

const exploreMode =
usePlanetStore(
state=>state.exploreMode
);

const introFinished =
usePlanetStore(
state=>state.introFinished
);

const targetPlanet =
usePlanetStore(
state=>state.targetPlanet
);

const isSelected =
selectedPlanet?.name === name;

return (


<group position={position}>


    {/* Planet */}

    <mesh

    visible={
    !exploreMode ||
    targetPlanet?.name === name
}

        onClick={()=>{

            if(
                exploreMode &&
                targetPlanet?.name !== name
            ){
                return;
            }


            setTargetPlanet({

                name:name,

                position:position

            });

        usePlanetStore.getState().openPanel();


    }}

    >


        <sphereGeometry

        args={[
            isSelected ? 1.5 :
            size * 1.4,
            64,
            64
        ]}

        />


        <meshStandardMaterial

            map={map}

            roughness={0.55}

            metalness={0.05}

            transparent

            opacity={1}

            emissive="#111111"

            emissiveIntensity={0.2}

            />


    </mesh>




    {/* Planet glow */}

    <mesh
        visible={
            !exploreMode ||
            targetPlanet?.name === name
            }

            >

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
        style={{
            display:
            !introFinished ||
            isSelected ||
            (exploreMode && targetPlanet?.name !== name)
            ?
            "none"
            :
            "block"
        }}

        
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