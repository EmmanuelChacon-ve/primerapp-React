import {NavLink} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Links from "./Links"
import CartWidget from '../Carts/CartWidget'


const SiteNav = () => {

    return (
        <Navbar id="test" collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <NavLink to="/" exact>
                    <img src="/favicon.ico.jpg" height="200" alt="" />
                </NavLink>
          
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="ml-auto">
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <Links />
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default SiteNav
