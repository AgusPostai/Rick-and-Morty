import { Link } from "react-router-dom";

const Card = ({ id, name, status, species, gender, origin, image, onClose }) => {

   return (

      <Link to = {`/detail/${id}/`}>
         <div>
            <img src={image} alt="" />
            <h2>Name :{name}</h2>
            <h2>Status:{status}</h2>
            <h2>Species:{species}</h2>
            <h2>Gender:{gender}</h2>
            <h2>Origin:{origin}</h2>
            <button onClick={() => onClose(id)}>Cerrar</button>
         </div>

      </Link>
   );
}


export default Card
