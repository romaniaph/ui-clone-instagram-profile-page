import styled from "styled-components";

export const Container = styled.View`
    width: 100%;
    justify-content: space-evenly;
    flex-direction: row;
`;

export const IconItem = styled.View`
    height: 50px;
    width: 33.3%;
    align-items: center;
    justify-content: center;
    border-bottom-width: 0.2px;
    border-bottom-color: lightgrey;
`;

export const Icon = styled.Image`
    height: 25px;
    width: 25px;
`;