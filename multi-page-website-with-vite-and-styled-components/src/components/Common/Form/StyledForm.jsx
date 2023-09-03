import { css, styled } from 'styled-components'

export const StyledFormContainer = styled.div`
    display: flex;
    justify-content: center;
    /* text-align: center; */
    min-width: 100%;

    ${props => 
           props.marginTop ? css`
                margin-top: ${ props.marginTop } ;
           `
           : css`
                margin-top: 6rem ;
           `
    
    }
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    min-width: 50%;
`