import { Button } from '@zendeskgarden/react-buttons';
import { Input, Label } from '@zendeskgarden/react-forms';
import styled from 'styled-components';
import { device } from '../utils/device';

export const MainContainer = styled.div`
    padding: 5% 10%;
`;

export const HeaderSection = styled.div`
    padding: 3% 0;

    & h1{
        color: #BD3B5F;
        text-align: center;
        font-size: 55px;

        @media ${device.mobile}{
            font-size: 45px;
        }
    }

    & p{
        color: white;
        text-align: center;
        margin-top: 15px;
        font-size: 20px;

        @media ${device.mobile}{
            font-size: 16px;
        }
    }
`;

export const FormContainer = styled.div`
    padding: 0 10%;
`;

export const QueryInput = styled(Input)`
    &::placeholder{
        color: #9DA3AE;
    }
`;

export const InputRow = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    padding: 2% 0;

    @media ${device.bigMobile}{
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${device.mobile}{
        grid-template-columns: 1fr;
    }
`;

export const CustomLabel = styled(Label)`
    color: white;
`;

export const FormButton = styled(Button)`
    margin-top: 3%;
    background-color: #BD3B5F;
    color: white;
    border: none;

    &:hover{
        background-color: #BD3B5F;
        color: white;
        border: none;
    }

    &:disabled{
        background-color: #BD3B5F;
        color: white;
        border: none;
    }
`;


export const RecipeResultContainer = styled.div`
    // background-color: white;
    padding: 5%;
`;

export const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > p{
        color: white;
        font-size: 26px;
        margin-top: 15px;
    }
`;

export const ResultRow = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;

    @media ${device.smallDesktop}{
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${device.bigMobile}{
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${device.mobile}{
        grid-template-columns: 1fr;
    }
`;

