import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootState } from '../reducer'
import { ProductType } from '../type'
import tee from './classic-tee.jpg'
import shoppingCart from './shopping_cart_black_24dp.svg'
const Container = styled.div`
    background: #F6F6F7;
    color: #888;
    margin-top: 20px;
    height: 25px;
    line-height: 20px;
    text-align: right;
    position: relative;
`;
const Title = styled.div`
    font-size: 12px;
    position: absolute;
    right: 160px;
    cursor: pointer;
    z-index: 2;
    @media(max-width: 768px) {
        right: 20px;
    }
`;
const Cart = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    right: 160px;
    top: 36px;
    border: #ccc 1px solid;
    background: #fff;
    width: 280px;
    z-index: 1;
    @media(max-width: 768px) {
        left: 25px;
        width: 95%;
    }
`;
const Row = styled.div`
    display: flex;
    color: #000;
    font-size: 12px;
    margin: 15px;
`;
const Detail = styled.div`
    text-align: left;
    padding: 10px;
`;
const MiniCart = () => {
    const [visibility, setVisibility] = React.useState(false)
    const products = useSelector<RootState, ProductType[]>(state => state.reducer)
    let productInCart = 0;
    let width = window.innerWidth
    products.forEach(i => {
        productInCart += i.quantity
    })
    const showCart = () => {
        setVisibility(!visibility);
    }
    return (
        <Container>
            <Title onClick={showCart}>
                {width > 768 ? 'My Cart ' : <img src={shoppingCart} />} ({productInCart})
            </Title>
            {visibility &&
                <Cart>
                    {products.map(i => (
                        <Row>
                            <img src={tee} width='70px'/>
                            <Detail>
                                <b>{i.name}</b>
                                <p>{i.quantity} * <b>${i.price}</b></p>
                                <p>Size: {i.size}</p>
                            </Detail>
                        </Row>
                    ))}
                </Cart>
            }
        </Container>
    )
}

export default MiniCart