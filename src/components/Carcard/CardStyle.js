import styled from "styled-components";
export const Wrapper = styled.div`
    width: 333px;
    height: 550px;
    display: flex;
    justify-content: center;
`
export const Content = styled.div`
    width: 90%;
    padding-left: 28px;

    p {
        font-size: 12px;
        font-weight: 400;
    }

    .btn-primary {
        width: 100%;
        background-color: var(--limegreen-04);
        border: none;
        :hover{
            background-color: green !important;
            color: white;
        }
    }
`