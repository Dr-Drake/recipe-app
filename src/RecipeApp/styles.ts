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
`;

