// import { Link } from 'react-router-dom'
import { StyledPage404 } from './StyledPage404'
import Typography from '../../components/UI/Typography/Typography'
import Button from '../../components/UI/Button/Button'

function Page404() {
  return (
    <StyledPage404>
        <img src='../images/error.svg' alt='error' />
        <Typography elementType="h1" text="404" />
        <Typography elementType="h2" text="Page Not Found!!!" />
        <Button route="/" text="Home Page" />
    </StyledPage404>
  )
}

export default Page404