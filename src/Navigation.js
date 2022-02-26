import { Button } from 'react-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthUserContext';
const Navigation =(props)=>{
    const { signOut, } = useAuth();
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
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/classrooms">Classrooms</Nav.Link>
                    <Nav.Link href="/Products">Ask Doubts</Nav.Link>
                    <Nav.Link href="/Products">My Notes</Nav.Link>
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