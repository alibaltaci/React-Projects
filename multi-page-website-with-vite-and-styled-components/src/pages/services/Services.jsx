import { useEffect } from "react";
import { useGlobalContext } from "../../contexts/GlobalContext"
import StyledServicesPage from "./StyledServicesPage";
import Button from "../../components/UI/Button/Button"
import Typography from "../../components/UI/Typography/Typography"

export default function Services() {

  const { dispatchReturner, servicesPage } = useGlobalContext()

  useEffect(() => {
      dispatchReturner("services");
  }, [servicesPage])

  console.log(servicesPage)

  const { services, pageTitle, button, servicesRoute} = servicesPage

  return (
    <StyledServicesPage className="section" >
      <Typography elementType="h2" text={ pageTitle } className="common-heading" />
      <div className="container grid grid-three-column">
        {
          services.map( service => {
            const { id, title, image, description } = service;
            return(
              <div key={ id } className="card">
                <figure>
                  <img src={ image } alt={ title } />
                </figure>
                <div className="card-data">
                  <Typography elementType="h3" text={ title } />
                  <Typography text={ description } />
                  <Button route={servicesRoute} text={button} />
                </div>
              </div>
            )
          }) 
        }
      </div>
    </StyledServicesPage>
  )
}
