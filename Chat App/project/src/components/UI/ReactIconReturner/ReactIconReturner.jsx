import { BsCameraVideoFill, BsFileEarmarkImage, BsPersonFillAdd, BsSendFill } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";
import { SlOptions } from "react-icons/sl";
import { useHoverColor } from "../../../hooks";

export const ReactIconReturner = ({icon, color="white", hoverColor="plum", cursor="pointer", size="1.5rem", ...props }) => {

    const { clr, handleColorOver, handleColorOut } = useHoverColor(color, hoverColor)

    const iconsMap = {
        "file": MdAttachFile,
        "image" : BsFileEarmarkImage,
        "send" : BsSendFill,
        "cam" : BsCameraVideoFill,
        "person" : BsPersonFillAdd,
        "options" : SlOptions,
    }

    const SelectedIcon = iconsMap[icon]

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
