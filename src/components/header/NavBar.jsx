import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../components/assets/img/logo-white.png'
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import './NavBarStyle.scss'

function NavBar() {
  return (
    <>
        <Navbar className='nav' variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand>
                    <Link to={'/'}>
                        <img src= {Logo} alt="logo" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link className='link'><Link to={'/'}>Home</Link> </Nav.Link>
                    <Nav.Link className='link'><Link to={'/About'}>About</Link> </Nav.Link>
                    <Nav.Link className='link'><Link to={'/Work'}>Work</Link> </Nav.Link>
                    <Nav.Link className='link'><Link to={'/Contact'}>Contact</Link> </Nav.Link>
                </Nav>
                <Nav className='socialIcon'>
                    <Nav.Link className='link icon_social'> <Link to={'/'}><FaFacebook /></Link> </Nav.Link>
                    <Nav.Link className='link icon_social'> <Link to={'/'}><FaGithub /></Link> </Nav.Link>
                    <Nav.Link className='link icon_social'> <Link to={'/'}><FaLinkedinIn /></Link> </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  ) 
}

export default NavBar;
