import styled from 'styled-components';

export const AboutContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    justify-content: space-evenly;
    margin: auto;
    padding: 0 24px;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`

export const Heading = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 70px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    margin-bottom: 30px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

`

export const Para = styled.p`
    max-width: 1165px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    letter-spacing: 0.02em;

    @media screen and (max-width: 768px) {
        font-size: 17px;
    }
`

export const AboutImage = styled.img`
    max-width: 880px;
    align-self: flex-end;
    width: 100%;

`

