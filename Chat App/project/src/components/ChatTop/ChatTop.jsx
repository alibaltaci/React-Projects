import { BsCameraVideoFill, BsPersonFillAdd } from "react-icons/bs"
import { FlexContainer, ProfileImage, Typography } from "../UI"
import { SlOptions } from "react-icons/sl"

export const ChatTop = () => {
    return(
        <FlexContainer type="row" backgroundColor="black_default" height="5rem" radiusTwo="s" align="center" justify="space-between" horizonalPadding="2rem" >
        <FlexContainer type="row" align="center" >
          <ProfileImage src="./images/balloon-profile.svg" alt="profile" loading="lazy" width="3rem" height="3rem" bgColor="white" marginRight="1rem" />
          <Typography elementType="span" text="Alex" color="white_default" variant="parahraph_xl" />
        </FlexContainer>
        <FlexContainer type="row" gap="1rem" >
          <BsCameraVideoFill  size="1.5rem" color="white" title="cam" />
          <BsPersonFillAdd size="1.5rem" color="white" />
          <SlOptions size="1.5rem" color="white" />
        </FlexContainer>
      </FlexContainer>
    )
}