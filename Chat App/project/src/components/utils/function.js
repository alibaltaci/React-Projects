import { theme } from "../../styles/theme";

export function hexToRGB(hex, alpha){

    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)

    if(alpha){
        return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
    }else{
        return "rgba(" + r + "," + g + "," + b + "," + ")";
    }
}


export function borderEditor(border){

    const arr = border.split(" ")
    const color = theme.colors[arr[2]]

    if( color ){
        return `${arr[0]} ${arr[1]} ${color}`
        
    }
    else{
        return border
    }
}