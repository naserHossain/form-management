import React from "react";
import TextInput from "../../ui/inputs/TextInput";
import Container from "../../ui/container/Container";
import Label from "../../ui/inputs/Label";
import styled from "styled-components";

const ErrorMessage = styled.div`
    font-size: 0.8rem;
    color: red;
`;
const InputGroup = ({
    label,
    name,
    value,
    placeholder,
    error,
    onChange,
    onFocus,
    onBlur,
}) => {
    return (
        <Container>
            <Label htmlFor={name}> {label} </Label>
            <TextInput
                name={name}
                id={name}
                placeholder={placeholder ?? ""}
                value={value}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
    );
};

export default InputGroup;
