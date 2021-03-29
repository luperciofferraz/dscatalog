import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductPrice from '../../ProductPrice';

test('Should Render ProductPrice', () => {

    
    //Arrange
    const price = 1200;

    //Act
    render(

        <ProductPrice price={price} />

    )

    //Assert
    const currencyElement = screen.getByText('R$');
    const priceElement = screen.getByText('1,200.00');

    expect(currencyElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();

});

test('Should Render ProductPrice with price equals zero', () => {

    
    //Arrange
    const price = 0;

    //Act
    render(

        <ProductPrice price={price} />

    )

    //Assert
    const currencyElement = screen.getByText('R$');
    const priceElement = screen.getByText('0.00');

    expect(currencyElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();

});

test('Should Render ProductPrice without thousand separator', () => {

    
    //Arrange
    const price = 100;

    //Act
    render(

        <ProductPrice price={price} />

    )

    //Assert
    const currencyElement = screen.getByText('R$');
    const priceElement = screen.getByText('100.00');

    expect(currencyElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();

});