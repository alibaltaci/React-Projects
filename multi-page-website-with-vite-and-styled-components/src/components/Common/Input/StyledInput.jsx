import { styled, css } from 'styled-components'

const SharedStyles = css`

    max-width: 50rem;
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
    }
`

export const StyledTextArea = styled.textarea`
    ${SharedStyles}
`