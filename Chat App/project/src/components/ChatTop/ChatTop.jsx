import { FlexContainer, ProfileImage, ReactIconReturner, Typography } from "../UI"
import { AiOutlineMenu } from "react-icons/ai";
import {useMediaQuery} from "react-responsive"
import { theme } from "../../styles/theme";

export const ChatTop = () => {

  const isResponsive = useMediaQuery({query: `(max-width: ${theme.screen.tablet})`})

  const icons = ["cam", "person", "options"]

    return(
        <FlexContainer type="row" gap="1rem" backgroundColor="black_default" height="6.3rem" radiusTwo="s" align="center" justify="space-between" horizonalPadding="2rem" >
        <FlexContainer type="row" align="center" gap="1rem" >
          { isResponsive && <AiOutlineMenu color="white"  size="2rem"/> }
          <FlexContainer type="row" align="center" >
            <ProfileImage src="./images/balloon-profile.svg" alt="profile" loading="lazy" width="3rem" height="3rem" bgColor="white" marginRight="1rem" />
            <Typography elementType="span" text="Alex" color="white_default" variant="parahraph_xl" />
          </FlexContainer>
        </FlexContainer>
        <FlexContainer type="row" gap="1rem" >
          {
            icons.map( icon => (
              <ReactIconReturner key={icon} icon={icon} />
            ))
          }
        </FlexContainer>
      </FlexContainer>
    )
}