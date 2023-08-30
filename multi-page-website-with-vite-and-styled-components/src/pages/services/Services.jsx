import { useEffect } from "react";
import { useGlobalContext } from "../../contexts/GlobalContext"
import StyledServicesPage from "./StyledServicesPage";
import Button from "../../components/UI/Button/Button"

export default function Services() {

  const { dispatchReturner, servicesPage } = useGlobalContext()

  useEffect(() => {
      dispatchReturner("services");
  }, [servicesPage])

  console.log(servicesPage)

  const { services, pageTitle, button, servicesRoute} = servicesPage

  return (
    <StyledServicesPage className="section">
      <h2 className="common-heading">{pageTitle}</h2>
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
                  <h3>{ title }</h3>
                  <p>{ description }</p>
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
