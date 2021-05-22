import React from 'react'
import styled from 'styled-components'
import $ from 'jquery'

const Container = styled.div`
    width: 500px;
    margin-left: 150px;
`;
const Name = styled.div`
    font-size: 20px;
    margin: 25px 0;
`;
const Price = styled.div`
    font-weight: bold;
    border-top: rgb(248,248,248) 0.2px solid;
    border-bottom: rgb(248,248,248) 0.2px solid;
    padding: 5px 0;
    font-size: 14px;
`;
const Description = styled.div`
    color: #888;
    margin: 30px 0;
    font-size: 13px;
    line-height: 25px;
`;
const Size = styled.span`
    font-size: 11px;
    color: #888;
`;
const Star = styled.span`
    color: #C90000;
    font-size: 11px;
`;
const SizeOption = styled.div`
    border: #CCC 2px solid;
    color: #888;
    font-size: 10px;
    width: 36px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    margin: 3px;
    display: inline-block;
    cursor: pointer;
`;
const Button = styled.div`
    border: #000 2px solid;
    width: 140px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    font-weight: bold;
    margin: 20px 0;
    cursor: pointer;
    &:hover {
        background: #000;
        color: #fff;
        transition: 0.2s;
    }
`;
const Selected = styled.span`
    font-size: 11px;
    color: #000;
    padding-left: 2px;
    font-weight: bold;
`;
const Product = () => {
    const sizeOptions = ['S', 'M', 'L']
    const [selectedSize, setSelectedSize] = React.useState('');
    const addToCart = () => {
        alert("select a size")
    }
    const handleSizeChange = (size: string) => {
        setSelectedSize(size);
        sizeOptions.forEach(s => {
            $(`#${s}`).css('border-color', '#ccc');
        });
        $(`#${size}`).css('border-color', '#000');
    }
    return (
        <Container>
            <Name>Classic Tee</Name>
            <Price>$75.00</Price>
            <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus maxime dolore est autem cum quis illum. Nam consectetur, architecto voluptatibus id eligendi itaque voluptatem eius nulla modi repellendus laboriosam! Ab.</Description>
            <Size>SIZE</Size><Star>*</Star>{' '}<Selected>{selectedSize}</Selected><br /><br />
            {sizeOptions.map(i => (<SizeOption id={i} onClick={() => handleSizeChange(i)}>{i}</SizeOption>))}
            <br />
            <Button onClick={addToCart}>ADD TO CART</Button>
        </Container>
    )
}

export default Product
