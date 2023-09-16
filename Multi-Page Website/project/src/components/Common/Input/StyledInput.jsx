import { styled, css } from 'styled-components'

const SharedStyles = css`

    /* max-width: 50rem; */
    min-width: 60%;
    color: ${({theme}) => theme.colors.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid ${({theme}) => theme.colors.border};
    text-transform: uppercase;
    box-shadow: ${({theme}) => theme.colors.shadowSupport};
`

export const StyledInputArea = styled.input`
    ${SharedStyles}

    &[type="submit"]{
        max-width: 16rem;
        margin-top: 2rem;
        background-color: ${({theme}) => theme.colors.btn};
        color: ${({theme}) => theme.colors.white};
        padding: 1.4rem 2.2rem;
        border-style: solid;
        border-width: .1rem;
        text-transform: uppercase;
        font-size: 1.8rem;
        cursor: pointer;
        transition: all 0.2s;

        &:hover{
            background-color: ${({theme}) => theme.colors.white};
            border: 1px solid ${({theme}) => theme.colors.btn};
            color: ${({theme}) => theme.colors.btn};
            transform: scale(0.9);
        }
    }
`

export const StyledTextArea = styled.textarea`
    ${SharedStyles}
    height: 12rem;

`