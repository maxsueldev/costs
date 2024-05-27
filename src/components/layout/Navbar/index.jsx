import { Link } from "react-router-dom";
import Container from '../Container';
import logo from '../../../img/costs_logo.png';
import { NavbarList, List } from './style';

function Navbar() {
    return (
        <NavbarList>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Costs" />
                </Link>
                <List>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projetos</Link>
                    </li>
                    <li>
                        <Link to="/company">Empresa</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contato</Link>
                    </li>
                </List>
            </Container>
        </NavbarList>
    );
}

export default Navbar;