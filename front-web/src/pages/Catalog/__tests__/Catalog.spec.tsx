import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Catalog from '..';
import { Router } from 'react-router';
import history from 'core/utils/history';
import { productsResponse } from './fixtures';

const server = setupServer(

  rest.get('http://localhost:8080/products', (req, res, ctx) => {
    return res(ctx.json(productsResponse))
  })

)
  
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close()); 

test('Should Render Catalog', async () => {

    //Arrange
    
    //Act
    render(
        <Router history={history}>
            <Catalog />
        </Router>
    );

    //Assert
    expect(screen.getAllByTitle('Loading...')).toHaveLength(3);
    expect(screen.getByText('Catálogo de Produtos')).toBeInTheDocument();

    await waitFor(() => expect(screen.getByText('PC Gamer Alfa')).toBeInTheDocument());

    expect(screen.getByText('PC Gamer')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.queryAllByTitle('Loading...')).toHaveLength(0);

    screen.debug();
});