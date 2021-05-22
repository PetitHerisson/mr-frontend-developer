import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background: #F6F6F7;
    color: #888;
    margin-top: 20px;
    padding: 10px;
    text-align: right;
`;
const Title = styled.div`
    font-size: 12px;
    margin-right: 160px;
`;
const MiniCart = () => {
    return (
        <Container>
            <Title>My Cart ()</Title>
        </Container>
    )
}

export default MiniCart