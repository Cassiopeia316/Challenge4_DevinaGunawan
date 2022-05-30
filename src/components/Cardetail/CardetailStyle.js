import styled from "styled-components";
export const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    justify-content: space-between;
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    
    .right {
        width: 63%;
    }

    .payment {
        background-color: var(--limegreen-04);
        border: none;
        margin-top: 30px;
        margin-left: 580px;
        :hover{
            background-color: green !important;
            color: white;
        }
    }

    .card {
        width: 385px;
        padding: 25px;
    }

    .card-body {
        font-size: 14px;
    }

    .card-body > p {
        margin-bottom: 30px;
    }

    .card-body > h5 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .card-body > h5 > p {
        font-weight: 400;
    }

    .card-title {
        margin-top: -5px;
    }

    .cardpayment {
        background-color: var(--limegreen-04);
        border: none;
        width: 100%;
        :hover{
            background-color: green !important;
            color: white;
        }
    }
`