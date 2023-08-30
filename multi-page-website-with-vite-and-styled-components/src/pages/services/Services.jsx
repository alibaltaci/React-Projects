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

  return (
    <StyledServicesPage className="section">
      <h2 className="common-heading">Our Services</h2>
      <div className="container grid grid-three-column">
        {
          servicesPage.services.map( service => {
            const { id, title, image, description } = service;
            return(
              <div key={ id } className="card">
                <figure>
                  <img src={ image } alt={ title } />
                </figure>
                <div className="card-data">
                  <h3>{ title }</h3>
                  <p>{ description }</p>
                  <Button route="/services" text="Read More" />
                </div>
              </div>
            )
          }) 
        }
      </div>


    </StyledServicesPage>
  )
}
