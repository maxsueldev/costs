import styled from "styled-components";

const FooterTag = styled.footer`
    background-color: #222;
    color: #FFF;
    padding: 2em;
    text-align: center;
`;

const SocialList = styled.ul`
    display: flex;
    justify-content: center;

    li {
        margin: 0 1em;

        &:hover {
            color: #FFBB33;
        }

        svg {
            font-size: 1.5em;
            cursor: pointer;
        }
    }
`;

const Copy = styled.p`
    margin-top: .5em;
    span {
        font-weight: bold;
        color: #FFBB33;
    }
`;

export { FooterTag, SocialList, Copy };