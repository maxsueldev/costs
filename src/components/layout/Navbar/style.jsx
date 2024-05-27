import styled from "styled-components";

const NavbarList = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: #222;
    padding: 1em;
`;

const List = styled.ul`
    display: flex;
    align-items: center;

    li {
        margin-right: 1em;

        a {
            color: #FFF;

            &:hover {
                color: #FFBB33;
            }
        }
    }
`;

export { NavbarList, List };