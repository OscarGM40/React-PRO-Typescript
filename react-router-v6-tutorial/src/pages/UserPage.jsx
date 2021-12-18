import { useParams } from "react-router-dom";


export const UserPage = () => {

  const params = useParams();

  return (
    <div>
      User <h1>{params?.id}</h1>
    </div>
  )
}
