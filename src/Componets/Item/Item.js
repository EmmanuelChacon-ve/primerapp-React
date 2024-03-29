import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'


const Item = ({ id, title, pictureURL, category}) => {

   

    return (
            <card>
                <p className="fs-4 text-primary">{ title }</p>
                <p className="lead text-secondary">{ category }</p>
                <img className="imgList" alt='img' src={ pictureURL } />
                <div className="agregarCarrito">
                <Link to={`/item/producto${id}`}>
                    <Button variant="info">Detalle del plato</Button>
                </Link>
                </div>
            </card>
    )
    }

export default Item

