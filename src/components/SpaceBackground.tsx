import { useTexture, Stars } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";


export default function SpaceBackground(){


    const texture = useTexture("/textures/background.png");


    const { scene, viewport } = useThree();



    useEffect(()=>{


        texture.mapping = 300;


        scene.background = texture.clone();



    },[texture,scene]);




    const starRadius =
        viewport.width < 8
        ?
        90
        :
        viewport.width < 14
        ?
        110
        :
        120;



    const starDepth =
        viewport.width < 8
        ?
        60
        :
        viewport.width < 14
        ?
        70
        :
        80;



    return (

        <Stars

            radius={starRadius}

            depth={starDepth}

            count={2500}

            factor={1.5}

            saturation={0}

            fade

            speed={0.2}

        />

    )

}