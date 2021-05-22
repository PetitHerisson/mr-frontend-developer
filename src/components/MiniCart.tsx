import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootState } from '../reducer'
import { ProductType } from '../type'
import tee from './classic-tee.jpg'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const Container = styled.div`
    background: #F6F6F7;
    color: #888;
    margin-top: 20px;
    padding: 10px;
    text-align: right;
    position: relative;
`;
const Title = styled.div`
    font-size: 12px;
    margin-right: 160px;
    cursor: pointer;
    z-index: 2;
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
    products.forEach(i => {
        productInCart += i.quantity
    })
    const showCart = () => {
        setVisibility(!visibility);
    }
    return (
        <Container>
            <Title onClick={showCart}>My Cart ({productInCart})</Title>
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