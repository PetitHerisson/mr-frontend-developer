import React from 'react'
import styled from 'styled-components'
import tee from './classic-tee.jpg'

const Container = styled.div`
    padding: 30px;
    width: 400px;
    @media(max-width: 768px) {
        width: 90%;
        margin: 10px;
    }
`;
const Picture = () => {
    return (
        <Container><img src={tee} alt='Classic Tee' width='100%' /></Container>
    )
}

export default Picture
