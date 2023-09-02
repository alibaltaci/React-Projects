// import { Link } from 'react-router-dom'
import { StyledPage404 } from './StyledPage404'
import Typography from '../../components/UI/Typography/Typography'
import Button from '../../components/UI/Button/Button'
import { useGlobalContext } from '../../contexts/GlobalContext'
import { useEffect } from 'react'

function Page404() {

  const { dispatchReturner ,page404 } = useGlobalContext()

  useEffect( () => dispatchReturner("404"), [] )
  
  const { image, error, title, subTitle, button, route } = page404
  return (
    <StyledPage404>
        <img src={image} alt={error} />
        <Typography elementType="h1" text={title} />
        <Typography elementType="h2" text={subTitle} />
        <Button route={route} text={button} />
    </StyledPage404>
  )
}

export default Page404