import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Item from "./Item"

const ItemList = ({ productos }) => {

    if (productos.length === 0) {

        return (
            <div className="cargaProductos text-center">
                <Spinner animation="border" variant="warning"/>
                <p className="fs-4 text text-muted cargaTexto"> Cargando productos </p>
                <img src="/favicon.ico" alt="" />
            </div>
        )

      } else {
            return (
                <Container fluid className="contenedorProd">
                    <Row>
                        {productos.map((prod) => {
                            return (
                                <Col key={prod.id} className="contenedorProdInv text-center col-md-4">
                                    <Item 
                                        id={prod.id} 
                                        title={prod.title}
                                        category={prod.category} 
                                        pictureURL={prod.pictureURL}
                                    />
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            )
  
}
}

export default ItemList

