import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthUserContext';
import logo from './basmatiLogo.svg';
const Navigation =(props)=>{
    const { signOut, authUser, loading } = useAuth();
    const navigate=useNavigate();
    const gotologin=()=>{
        navigate('/login')
    }
    const logout=()=>{
        signOut();
        navigate('/login')
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                {/* <Navbar.Brand href="#home"><img src={logo} style={{width:100, marginTop: -7}} /></Navbar.Brand> */}
                <Navbar.Brand href="#home">eduPro</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {props.authUser!==null?
                    <Button onClick={logout} variant="outline-success">Logout</Button>:
                    <Button onClick={gotologin} variant="outline-success">Login</Button>    
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}
export default Navigation;