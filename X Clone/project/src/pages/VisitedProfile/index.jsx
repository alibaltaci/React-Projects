import { useParams } from "react-router-dom"

export default function VisitedProfile() {

    const { slug } =useParams();

  return (
    <div>
        Visited Profile - { slug }
    </div>
  )
}
