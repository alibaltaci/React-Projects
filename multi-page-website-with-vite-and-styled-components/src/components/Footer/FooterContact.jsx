import Container from "../Common/Container/Container";
import Typography from "../UI/Typography/Typography";
import { StyledFooter } from "./StyledFooter";

export default function FooterContact() {

    // const {} = useGlobalContext().footer.contact

  return (
    <StyledFooter>
        <Container grid="4">
            <div>
                <Typography elementType="h3" text="hh" color="white" marginBottom="2.4rem" />
                <Typography text="jjj"  color="white" />
            </div>
            <div>
                <Typography elementType="h3" text="Subscribe to get important updates"  color="white" marginBottom="2.4rem" />
                {/* <Form /> */}
            </div>
            {/* social icons */}
            <div>
                <Typography elementType="h3" text="Follow Us" color="white" marginBottom="2.4rem" />
            </div>
            <div>
                <Typography elementType="h3" text="Call Us" color="white" marginBottom="2.4rem" />
                <Typography elementType="h3" text="0 555 000 00 00" color="white" />
            </div>
        </Container>
    </StyledFooter>
  )
}
