import React from 'react'
import styled from 'styled-components'
import tee from './classic-tee.jpg'

const Container = styled.div`
    padding: 30px;
    margin-left: 150px;
`;
const Picture = () => {
    return (
        <Container><img src={tee} alt='Classic Tee' width='400px' /></Container>
    )
}

export default Picture
