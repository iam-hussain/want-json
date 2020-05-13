import styled from 'styled-components';
import { Button } from './Button/Button';
import { device } from '../../style';

export const Label = styled.label`
    font-family: "Rajdhani";
    font-size: 1rem;
    font-weight: 600;
    position: absolute;
    top: 20px;
    left: 20px;
    transition: all .3s ease-in-out;
    pointer-events: none;
    display: block;
    margin: 0;
    color: ${(props) => (props.hasError ? props.theme.error : props.theme.text2)};
    background-color: transparent;
    line-height: 1em;
    text-align: left;
`;

export const URLShow = styled(Label)`
    top: -25px;
    left: 10px;
    padding: 0 6px;
    font-size: .75rem;
    word-break: break-all;
    @media ${device.xs_sm}{
        top: -35px;
    }
`;

export const Input = styled.input`
    height: 54px;
    padding: 0 18px;
    overflow: visible;
    font-family: "Rajdhani";
    width: 100%;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 700;
    background-color: ${(props) => props.theme.bg};
    border: 1px solid;
    transition: border-color .2s ease-in-out;

    border-color: ${(props) => (props.hasError ? props.theme.error : props.theme.text3)};
    color: ${(props) => (props.hasError ? props.theme.error : props.theme.text1)};

    &:focus {
        border-color: ${(props) => (props.hasError ? props.theme.error : props.theme.secondary)};
        outline: none;
    }
    +${Label}{
        color: ${(props) => (props.hasError ? props.theme.error : props.theme.text2)};
    }

    &:focus+${Label},
    &:valid+${Label},
    &:disabled+${Label} {
        color: ${(props) => (props.hasError ? props.theme.error : props.theme.text2)};
        background-color: ${(props) => props.theme.bg};
        padding: 0 6px;
        font-size: .75rem;
        top: -6px;
        left: 12px;
    }
`;

export const ErrorBlock = styled.span`
    position: absolute;
    top: 52px;
    left: 5px;
    font-size: 0.75rem;
    color: ${(props) => props.theme.error};
    font-family: "Rajdhani";
`;

export const Form = styled.form`
    min-width: 80%;
`;

export const Item = styled.div`
    position: relative;
    text-align: center;
    margin: 28px 0;
`;

export const TagGroup = styled.div`
    position: relative;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
    margin: 0;
    display: flex;
    min-height: 25px;
    border-radius: 5px;
    font-family: "Rajdhani";
    box-shadow: 0 0 28px 0 rgba(94, 92, 154, .12);
    -webkit-box-shadow: 0 0 28px 0 rgba(94, 92, 154, .12);
    
    ${ErrorBlock}{
        top: auto;
        bottom: -18px;
    }
`;

export const TagItem = styled.div`
    font-family: "Rajdhani";
    display: flex;
    background-color:  ${(props) => props.theme.paper1};
    color: ${(props) => props.theme.secondary};
    border-radius: 5px;
    padding: 2px 8px;
    padding-right: 16px;
    margin: 2px;
    position: relative;

    span {
        font-size: 12px;
        position: absolute;
        right: 5px;
        top: 0px;
        cursor: pointer;
        @media ${device.web}{
            &:hover{
                color : ${(props) => props.theme.primary};
            }
        }
    }
`;

export const InputButton = styled(Button)`
    color:  ${(props) => props.theme.secondary};
    display: flex;
    padding: 10px;
    font-size: 2rem;
    width: auto;
    border-left: none;
    border-radius: 0px 5px 5px 0px;
    border-color: ${(props) => props.theme.text3};
`;

export const InputGroup = styled.div`
    display: flex;
    ${Input}{
        border-right: none;
        border-radius: 5px 0px 0px 5px;
        &:focus ~ ${InputButton} {
            border-color: ${(props) => (props.hasError ? props.theme.error : props.theme.secondary)};
            outline: none; 
        }
    }
    ${InputButton}{
        color:  ${(props) => (props.hasError ? props.theme.error : props.theme.secondary)};
        border-color: ${(props) => (props.hasError ? props.theme.error : props.theme.text3)};
    }
`;

export const GroupName = styled.span`
    font-family: "Rajdhani";
    font-size: 1rem;
    transition: all .3s ease-in-out;
    pointer-events: none;
    margin: 10px;
    line-height: 1em;
`;

export const RadioGroup = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    border: 1px solid;
    padding: 15px 0px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    border-color: ${(props) => (props.hasError ? props.theme.error : props.theme.text3)};
    margin: 28px 0;

    ${GroupName}{
        color: ${(props) => (props.hasError ? props.theme.error : props.theme.text1)};
    }
    ${ErrorBlock}{
        top: auto;
        bottom:-20px;
    }
    ${Item}{
        margin: 5px;
    }
    ${Input}{
        cursor: pointer;
        left: 6px;
        position: absolute;
        width: 20px;
        height: 20px;
        opacity: 0;

        &:focus+${Label},
        &:valid+${Label},
        &:disabled+${Label} {
            color: ${(props) => (props.hasError ? props.theme.error : props.theme.text2)};
            background-color: ${(props) => props.theme.bg};
        }

        &+${Label} {
            position: relative;
            color: ${(props) => (props.hasError ? props.theme.error : props.theme.text2)};
            background-color: ${(props) => props.theme.bg};
            padding: 0 6px;
            font-size: .75rem;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 0px;
            left: 0px;
        }

        &+${Label}:before {    
            cursor: pointer;
            content: '';
            margin-right: 10px;
            display: inline-block;
            vertical-align: text-top;
            width: 20px;
            height: 20px;
            background: ${(props) => (props.hasError ? props.theme.error : props.theme.text1)};
            border-radius: 5px;
        }

        &:checked+${Label}:after {
            content: '';
            position: absolute;
            left: 10px;
            top: 4px;
            background: white;
            width: 12px;
            height: 12px;
            border-radius: 20px;
            background-color: ${(props) => props.theme.primary};
        }
    }
`;

export const CodeItem = styled(Item)`
    margin-top: 28px;
    ${ErrorBlock}{
        top: auto;
        bottom: -18px;
    }

    ${Label}{
        font-size: 0.75rem;
        top: -15px;
        right: 7px;
        left: auto;
    }
`;

export const CodeWrapper = styled.div`
    height: 300px;
    overflow: auto;
    border-radius: 5px;
    max-width: 100%;

    &::-webkit-scrollbar-track {
        background-color: #000;
        border-radius: 0 5px 5px 0;
        margin: 4px 0;
    }

    &::-webkit-scrollbar {
        background-color: #000;
        border-radius: 0 5px 5px 0;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.primary}; 
    }

    pre{
        min-height: 300px;
    }
`;
