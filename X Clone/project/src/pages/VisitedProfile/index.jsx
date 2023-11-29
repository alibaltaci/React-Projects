import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom"
import { useAccount } from "~/store/auth/hooks";

export default function VisitedProfile() {

    const { slug } =useParams();

    const {fullName} = useAccount()

  return (
    <>
      <Helmet >
        <title> {fullName} (@{slug}) </title>
      </Helmet>    
    <div>
        Visited Profile - { slug }
    </div>
    </>
  )
}
