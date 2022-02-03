import './NavBarStyle.scss'
import { Link } from 'react-router-dom'
import { Nav, Navbar, Container } from 'react-bootstrap'
import Logo from '../../components/assets/img/logo-white.png'
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa'

function NavBar() {
  return (
    <>
        <Navbar className='nav' variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to={'/'}>
                        <img src= {Logo} alt="logo" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav className='link nav-link'><Link to={'/'}>Home</Link></Nav>
                    <Nav className='link nav-link'><Link to={'/About'}>About</Link> </Nav>
                    <Nav className='link nav-link'><Link to={'/Work'}>Work</Link> </Nav>
                    <Nav className='link nav-link'><Link to={'/Contact'}>Contact</Link> </Nav>
                </Nav>
                <Nav className='social'>
                    <Nav className='link nav-link icon_social'> <Link to={'/'}><FaFacebook /></Link> </Nav>
                    <Nav className='link nav-link icon_social'> <Link to={'/'}><FaGithub /></Link> </Nav>
                    <Nav className='link nav-link icon_social'> <Link to={'/'}><FaLinkedinIn /></Link> </Nav>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  ) 
}

export default NavBar;
