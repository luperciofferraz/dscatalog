import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonIcon from '../../ButtonIcon';

test('Should Render ButtonIcon', () => {

    //Arrange
    const text = 'Logar';

    //Act
    render(
        <ButtonIcon text={text} />
    )

    //Assert
    const textElement = screen.getByText(text);

    expect(textElement).toBeInTheDocument();

});