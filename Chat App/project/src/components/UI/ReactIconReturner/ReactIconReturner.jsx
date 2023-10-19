import { useState } from "react";
import { BsCameraVideoFill, BsFileEarmarkImage, BsPersonFillAdd, BsSendFill } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";
import { SlOptions } from "react-icons/sl";

export const ReactIconReturner = ({icon, color="white", hoverColor="plum", cursor="pointer", size="1.5rem", ...props }) => {

    const ıconsMap = {
        "file": MdAttachFile,
        "image" : BsFileEarmarkImage,
        "send" : BsSendFill,
        "cam" : BsCameraVideoFill,
        "person" : BsPersonFillAdd,
        "options" : SlOptions,
    }

    const SelectedIcon = ıconsMap[icon]

    const [clr, setClr] = useState(color)

    const handleColorOver = () => {
        setClr(hoverColor)
    }

    const handleColorOut = () => {
        setClr(color)
    }
    // const handleMouseOver = (event) => {
    //     event.target.style = {{ hover: hoverColor}} ;
    // }

    // const handleMouseOut = (event) => {
    //     event.target.style.color = color
    // }

    return(
        <SelectedIcon 
            size={size} 
            color={clr}
            onMouseOver = {handleColorOver}
            onMouseOut = {handleColorOut}
            cursor={cursor} 
            {...props} 
        />
    )
}
