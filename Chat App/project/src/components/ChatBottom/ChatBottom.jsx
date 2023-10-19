import { FlexContainer, Input } from "../UI"
import { MdAttachFile } from "react-icons/md"
import { BsFileEarmarkImage, BsSendFill } from "react-icons/bs"

export const ChatBottom = () => {

    const handleMouseOver = (event) => {
        event.target.style.color = "plum";
    }

    const handleMouseOut = (event) => {
        event.target.style.color = "white";
    }
    
    return(
        <FlexContainer type="row" backgroundColor="black_default" bgOpacity=".9" height="3rem" radiusThree="s" align="center" width="100%" paddingLeft=".3rem">
            <Input  widthInput="100%" width="80%" height="95%"  color="black_default" paddingHorizonal="1rem" placeholder="Message..." textSize="min" bgColor="white_default" bgOpacity=".9" />
            <FlexContainer type="row"  center gap="1rem" width="20%" >
                <MdAttachFile size="1.5rem" title="File"
                    // color="white"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                />
                <BsFileEarmarkImage size="1.5rem" title="Image" 
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                />
                <BsSendFill size="1.5rem" title="Send" 
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                />
            </FlexContainer>
        </FlexContainer>
    )
}