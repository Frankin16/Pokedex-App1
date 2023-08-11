
import { Link } from "react-router-dom"

const Page404 = () => {
  return (
   <h1>
    This page not found, please, return <Link to={'/'}> home page </Link>
   </h1>
  )
}

export default Page404