import React from 'react'
import MiniCart from './MiniCart'
import Picture from './Picture'
import Product from './Product'
import styled from 'styled-components'

const Container = styled.div`
    text-align: left;
`;
const Flexbox = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    @media(max-width: 768px) {
        flex-direction: column;
    }
`;
const Layout = () => {
    return (
        <Container>
            <MiniCart />
            <Flexbox>
                <Picture />
                <Product />
            </Flexbox>
        </Container>
    )
}

export default Layout
