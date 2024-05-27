import styled from "styled-components";

const FormControl = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;

    label {
        margin-bottom: 0.6em;
        font-weight: bold;
    }

    input {
        padding: 0.7em;
        border-radius: 0;
        border: none;

        &::placeholder {
            color: #7B7B7B;
        }
    }
`;

export { FormControl };