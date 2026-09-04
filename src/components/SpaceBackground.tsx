import { useTexture, Stars } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";


export default function SpaceBackground(){

    const texture = useTexture("/textures/background.png");

    const { scene } = useThree();


    useEffect(()=>{

        texture.mapping = 300; // EquirectangularReflectionMapping

        scene.background = texture.clone();

    },[texture,scene]);


    return (

        <Stars

            radius={120}

            depth={80}

            count={2500}

            factor={1.5}

            saturation={0}

            fade

            speed={0.2}

        />

    )

}