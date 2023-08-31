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

  console.log(servicesPage)

  const { services, pageTitle, button, servicesRoute} = servicesPage

  return (
    <StyledServicesPage className="section" >
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
                <div className="card-data">
                  <Typography elementType="h3" text={ title } fontSize="2.4rem" margin="2rem 0" />
                  <Typography text={ description } margin="2rem  0" />
                  <Button route={servicesRoute} text={button} />
                </div>
              </div>
            )
          }) 
        }
      </Container>
    </StyledServicesPage>
  )
}
