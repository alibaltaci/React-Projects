import { useEffect } from "react";
import { useGlobalContext } from "../../contexts/GlobalContext"
import StyledServicesPage from "./StyledServicesPage";
import Button from "../../components/UI/Button/Button"
import Typography from "../../components/UI/Typography/Typography"
import Container from "../../components/Common/Container/Container"


export default function Services() {

  const { dispatchReturner, servicesPage } = useGlobalContext()

  useEffect(() => {
      dispatchReturner("services");
  }, [])

  const { services, pageTitle, button} = servicesPage

  return (
    <StyledServicesPage >
      <Typography elementType="h2" text={ pageTitle } />
      <Container grid="3" >
        {
          services.map( service => {
            const { id, title, image, description } = service;
            return(
              <div key={ id } className="card">
                <figure>
                  <img src={ image } alt={ title } />
                </figure>
                {/* <div className="card-data"> */}
                <Container direction="column" padding="2rem" gap="2rem">
                  <Typography elementType="h3" text={ title } fontSize="2.4rem" align="center" marginBottom="0" />
                  <Typography text={ description }  align="center" />
                  <Button  route={  `/services` } text={button} />
                  {/* <Button  route={  `service/${id}` } text={button} /> */}
                </Container>
                {/* </div> */}
              </div>
            )
          }) 
        }
      </Container>
    </StyledServicesPage>
  )
}
