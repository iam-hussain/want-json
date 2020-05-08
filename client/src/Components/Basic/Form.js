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

export const Form = styled.form`
    min-width: 80%;
`;


export const Item = styled.div`
    position: relative;
    text-align: center;
    margin: 28px 0;
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

        &+${Label} {position: relative;
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
            border-radius: 5px;
            background-color: #colors[bg];
        }
    }
`;
