import styled from "styled-components";
export const Wrapper = styled.div`
    background-color: var(--background-01);
    height: 400px;
    justify-content: center;
`
export const Content = styled.div`
    width: 100%;

    .title {
        padding-left: 6.5vw;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .title > p {
        width: 80%;
    }

    .title > h1{
        font-weight: bold;
        font-size: 36px;
    }

    .picture {
        height: 400px;
        position: relative;
    }

    .bluecar {
        border-radius: 60px 0px 0px 0px;
        background-color: var(--darkblue-04);
        height: 243px;
        width: 100%;
        position: absolute;
        right: 0;
        bottom: 0;
    }

    .img-car {
        position: absolute;
        bottom: 0;
        width: 93%;
    }
`