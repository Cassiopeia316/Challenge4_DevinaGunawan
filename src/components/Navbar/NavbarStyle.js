import styled from "styled-components";
export const Wrapper = styled.div`
    background-color: var(--background-01);
    height: 100px;
    position: relative;
    z-index: 20000;
`
export const Content = styled.div`
    top: 25px;
    .container-fluid {
        width: 90%;
        justify-content: space-between
    }
    .btn-success {
        :hover{
            background-color: green !important;
            color: white;
        }
    }
`