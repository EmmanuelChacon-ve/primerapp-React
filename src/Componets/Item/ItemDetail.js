import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Swal from 'sweetalert2'
import ItemCount from '../Count/ItemCount'
import { useContext } from 'react'
import { contexto } from '../../Context/cartContext'

const ItemDetail = ({ detalles }) => {

    const { addToCart } = useContext(contexto)

    const onAdd = (contador) => {
        Swal.fire({
            title: 'Producto agregado!',
            text: `Agregaste ${detalles[0].description}. Cantidad: ${contador}`,
            icon: 'info',
            confirmButtonText: "Aceptar",
            
            
    
        })
        detalles[0].quantity = contador
        addToCart(detalles)
    }

    if (detalles.length === 0) {

        return (
            <div className="cargaProductos text-center">
                <Spinner animation="border" variant="info" />
                <p className="fs-4 text text-muted cargaTexto"> Cargando detalle </p>
                <img src="/favicon.ico" alt="" />
            </div>
        )

    } else {

        return (
            <Container fluid className="contenedorProd">
                <Row>
                    {detalles.map((det) => {
                        return (
                            <Col key={det.id} className="contenedorProdInv text-center col-md-12">
                                <p className="fs-4 text-primary">{det.title}</p>
                                <p className="lead text-secondary">{det.category}</p>
                                <img alt='img' id="imgdescription"src={ det.pictureURL }/>
                                <p className="text-secondary detalleProd">{ det.description}</p>
                                <p className="lead text-info">Precio: <span>{ det.price }$</span></p>
                                <ItemCount 
                                    initial={1} 
                                    stock={10} 
                                    prodID={det.id} 
                                    prodName={det.description}
                                    onAdd={onAdd}
                                />
                            </Col>
                        )
                     })
                    }
                </Row>
            </Container>
        )
    }
}
export default ItemDetail

