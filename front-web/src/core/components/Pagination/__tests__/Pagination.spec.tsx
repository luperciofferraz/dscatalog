import React from 'react';
import { render, screen } from '@testing-library/react';
import Pagination from '../../Pagination';
import userEvent from '@testing-library/user-event';

test('Should Render ButtonIcon', () => {

    //arrange
    const totalPages = 3;
    const onChange = () => null;

    //act
    render (

        <Pagination 
            totalPages={totalPages} 
            onChange={onChange}  
        />

    );

    //assert
    const previousElement = screen.getByTestId('arrow-icon-previous');
    const nextElement = screen.getByTestId('arrow-icon-next');
    const firtPageItem = screen.getByText('1');
    const secondPageItem = screen.getByText('2');
    const thirdPageItem = screen.getByText('3');

    expect(previousElement).toBeInTheDocument();
    expect(nextElement).toBeInTheDocument();
    expect(firtPageItem).toBeInTheDocument();
    expect(secondPageItem).toBeInTheDocument();
    expect(thirdPageItem).toBeInTheDocument();

    expect(firtPageItem).toHaveClass('active');
    expect(secondPageItem).not.toHaveClass('active');
    expect(thirdPageItem).not.toHaveClass('active');

});

test('Should trigger onChange action', () => {

    //arrange
    const totalPages = 3;
    const onChange = jest.fn();

    //act
    render (

        <Pagination 
            totalPages={totalPages} 
            onChange={onChange}  
        />

    );

    //assert
    const previousElement = screen.getByTestId('arrow-icon-previous');
    const nextElement = screen.getByTestId('arrow-icon-next');
    const firtPageItem = screen.getByText('1');

    userEvent.click(firtPageItem);

    //expect(onChange).toHaveBeenCalledWith(0);
    //expect(onChange).toHaveBeenCalled();

});