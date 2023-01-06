import tagGrass from "../imagens/grass.png"
import tagPoison from "../imagens/poison.png"
import tagWater from "../imagens/water.png"
import tagBug from "../imagens/bug.png"
import tagFire from "../imagens/fire.png"
import tagFlying from "../imagens/flying.png"
import tagNormal from "../imagens/normal.png"


export const ImgTipo = (tipo) => {
    switch (tipo) {
        case "grass":
            return tagGrass;
        case "poison":
            return tagPoison;
        case "water":
            return tagWater;
        case "bug":
            return tagBug;
        case "fire":
            return tagFire;
        case "flying":
            return tagFlying;
        case "normal":
            return tagNormal;
         default:
            return tagGrass;
    }
}