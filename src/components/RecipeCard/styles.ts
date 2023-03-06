import styled from "styled-components";

export const Card = styled.div`
    border-radius: 8px;
    // width: 300px;
    // height: 250px;
    position: relative;
    cursor: pointer;

    .card-image{
        object-fit: cover;
        border-radius: 8px;
        width: 100%;
        height: 100%;
        display: block;
    }

    .overlay{
        transition: all 0.3s;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0,0,0,0.3);
        display: flex;
        flex-direction: column;
        padding: 5% 0;

        & p{
            color: white;
            text-align: center;
            font-weight: 500;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;  
            overflow: hidden;
        }

        &:hover{
            background-color: rgba(0,0,0,0.5);
        }
    }

    .spacer{
        flex: 1;
    }
`;