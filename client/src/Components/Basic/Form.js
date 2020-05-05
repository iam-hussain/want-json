import styled from 'styled-components';


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
    color: ${(props) => props.theme.text2};
    background-color: transparent;
    line-height: 1em;
    text-align: left;
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


export const Item = styled.div`
    position: relative;
    width: 100%;
    text-align: center;
    margin: 28px 0;
`;
