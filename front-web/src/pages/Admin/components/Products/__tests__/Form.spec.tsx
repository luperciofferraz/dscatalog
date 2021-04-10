import React from 'react';
import { getByLabelText, render, screen, waitFor } from '@testing-library/react';
import selectEvent from 'react-select-event';
import userEvent from '@testing-library/user-event';
import Form from '../Form';
import { rest } from 'msw';
import { Router } from 'react-router';
import history from 'core/utils/history';
import { categoriesResponse } from './fixtures';
import { setupServer } from 'msw/node';
import { ToastContainer } from 'react-toastify';

jest.mock('react-router-dom', () => ({

    ...jest.requireActual('react-router-dom'),

    useParams: () => ( {

        productId: 'create'

    })

}));

const server = setupServer(

    rest.get('http://localhost:8080/categories', (req, res, ctx) => {
      return res(ctx.json(categoriesResponse))
    }),
    rest.get('http://localhost:8080/products', (req, res, ctx) => {
        return res(ctx.status(201))
    })
  )
    
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close()); 

test('Should Render Form', async () => {

    //Arrange
    
    //Act
    render(
        <Router history={history}>
            <ToastContainer />
            <Form />
        </Router>
    );

    //Assert
    
    const submitButton = screen.getByRole('button', { name: /salvar/i});
    const nameInput = screen.getByTestId('name');
    const categoriesInput = screen.getByLabelText('Categorias');

//    userEvent.type(nameInput, 'Computador');

//    await selectEvent.select(categoriesInput, ['Computadores', 'Eletrônicos', 'Livros']);

//    userEvent.click(submitButton);

//    await waitFor( () => expect(screen.getByText('Produto salvo com sucesso!')).toBeInTheDocument());

//    expect(history.location.pathname).toBe('/admin/products');

});