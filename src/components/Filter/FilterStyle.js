import styled from "styled-components";
export const Wrapper = styled.div`
    position: relative;
    z-index: 10000;
    width: 80%;
    min-height: 100px;
    background-color: white;
    margin: 0 auto;
    transform: translateY(-40%);
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);

    &.selected {
        box-shadow: 0 0 0 1000vmax rgba(0,0,0, 0.5);
    }
    h5{
        margin-left: 2.8%;
        padding-top: 15px;
    }
`
export const Content = styled.div`
    min-height: inherit;
    align-items: center;
    justify-content: space-evenly;
    margin:0;

    .col-lg-2{
        padding: 0;
        position: relative;

        *{
            width: 100%;
        }
    }

    label {
        margin-bottom: 5px;
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    input[type=text] {
        position: relative;
        z-index: 50;
        padding: 5px 12px;
        outline: none;
        border: 1px solid #d0d0d0;
        border-radius: 2px;
        cursor: pointer;
        padding-right: 30px;

        &.disabled {
            background-color: var(--neutral-02);
        }
    }
    input[type=date] {
        position: absolute;
        top: 100%;
        left: 0;
        transform: translateY(-100%);
        z-index: 5;
    }
    label:nth-child(2){
        margin: 0;
        position: absolute;
        bottom: 10%;
        right: 5%;
        cursor: pointer;
        width: initial !important;
        z-index: 1000;
    }
    button{
        background-color: var(--limegreen-04);
        border: none;
        :hover{
            background-color: green;
            color: white;
        }
    }
` 

export const Selection = styled.div`
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;

    &.show{
        display: block;
    }
    
    p{
        background-color: white;
        padding: 5px 12px;
        margin: 0;
        transition: 0.5s;
        cursor: pointer;

        :hover{
            background-color: var(--limegreen-02);
            color: var(--limegreen-04);
            font-weight: 500;
        }

        ::after{
            content: attr(data-attr);
            position: absolute;
            right: 7%;
        }
    }
`