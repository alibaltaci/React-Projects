import IconReturner from "./IconReturner";
import Container from "../Container/Container"
import { StyledSocialIcon } from "./StyledSocialIcon";

export default function SocialIconContainer({data}) {

  return (
    <Container direction="row" gap="1rem" justify="center">
        {
            data.map( icon => {
                const { link, type, title } = icon
                return( 
                    <StyledSocialIcon key={link} >
                        <a  href={ link } target="_blank" rel="noopener noreferrer" title={title} >
                            <IconReturner type={type} />
                        </a>
                    </StyledSocialIcon>
                )
            })
        }
    </Container>
  )
}
